import { combineReducers } from 'redux'
import taskReducer from './task/tasksSlice'

export default combineReducers({
  tasks: taskReducer
})
