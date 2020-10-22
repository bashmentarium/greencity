import {call, put, takeLatest, takeEvery, all} from 'redux-saga/effects'
import {createAction} from '@reduxjs/toolkit'
import {login} from '../api/login'
import NavigationService from '../utils/navigationService'

export const moduleName = 'login'
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

export const loginSelector = (state) => state.login

export const loginStart = createAction(START)
export const loginSuccess = createAction(SUCCESS)
export const loginError = createAction(ERROR)

export function* loginSaga({type, payload}) {
  try {
    const request = yield call(login, {...payload})
    const response = yield request.json()

    if (!request.ok) {
      throw error
    }

    yield put(loginSuccess({user: response.user, token: response.jwt}))
    yield NavigationService.navigate('Map')
  } catch (e) {
    return yield put(loginError({error: error.message}))
  }
}

export const saga = [
  function* saga() {
    yield all([takeLatest(START, loginSaga)])
  },
]
