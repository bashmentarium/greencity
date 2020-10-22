import {combineReducers} from 'redux'
import login, {moduleName as loginReducer} from '../ducks/login'
import fetchProjects, {moduleName as projectsReducer} from '../ducks/projects'

export default combineReducers({
  [loginReducer]: login,
  [projectsReducer]: fetchProjects,
})
