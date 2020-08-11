import { createSlice } from '@reduxjs/toolkit'
import {taskList} from './initialState'

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskList as TaskPropTypes[],
  reducers: {
    addTask (state, action) {
      const { id, title } = action.payload
      state.push({ id, title, completed: false })
    },
    toggleTask (state, action) {
      const t = state.find((t) => t.id === action.payload)
      if (t) {
        t.completed = !t.completed
      }
    }
  }
})

export const { addTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
