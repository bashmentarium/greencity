import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import reducer from './reducer.js'
import mySaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(mySaga)

// DEV ONLY
window.store = store

export default store
