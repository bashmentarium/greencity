import {combineReducers} from 'redux'
import login, {moduleName as loginReducer} from '../ducks/login'
import fetchProjects from '../ducks/projects'

export default combineReducers({
  // [loginReducer]: login,
  projects: fetchProjects,
})
