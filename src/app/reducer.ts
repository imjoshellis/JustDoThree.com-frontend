import { combineReducers } from 'redux'
import taskReducer from '../task/tasksSlice'
import blockReducer from '../block/blocksSlice'

export const rootReducer = combineReducers({
  tasks: taskReducer,
  blocks: blockReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer





