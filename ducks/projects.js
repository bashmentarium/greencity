import {call, put, takeLatest, takeEvery, all} from 'redux-saga/effects'
import {createAction} from '@reduxjs/toolkit'
import {fetchProjects} from '../api/projects'

export const moduleName = 'projects'
const prefix = `${moduleName}`

export const START = `${prefix}/START`
export const SUCCESS = `${prefix}/SUCCESS`
export const ERROR = `${prefix}/ERROR`

export const initialState = {
  loading: false,
  success: false,
  error: null,
}

export default function reducer(
  state = initialState,
  {type, payload, ...rest}
) {
  switch (type) {
    case START:
      return {
        loading: true,
        success: false,
        error: null,
      }
    case SUCCESS:
      return {
        loading: false,
        success: payload,
        error: null,
      }
    case ERROR:
      return {
        loading: false,
        success: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export const projectsSelector = (state) => state.projects || []

export const fetchProjectsStart = createAction(START)
export const fetchProjectsSuccess = createAction(SUCCESS)
export const fetchProjectsError = createAction(ERROR)

export function* fetchProjectsSaga({type, payload}) {
  try {
    const request = yield call(fetchProjects, payload)
    const response = yield request.json()

    if (!request.ok) {
      throw error
    }

    yield put(fetchProjectsSuccess(response))
  } catch (e) {
    return yield put(fetchProjectsError({error: e.message}))
  }
}

export const saga = [
  function* saga() {
    yield all([takeLatest(START, fetchProjectsSaga)])
  },
]
