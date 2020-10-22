import {fork, all} from 'redux-saga/effects'
import {saga as loginSaga} from '../../ducks/login'
import {saga as projects} from '../../ducks/projects'

export default function* root() {
  const sagas = [...loginSaga, ...projects]
  yield all([...sagas].map((saga) => fork(saga)))
}
