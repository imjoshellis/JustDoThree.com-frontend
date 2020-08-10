import { createSlice } from '@reduxjs/toolkit'
import {taskList} from './initialState'
import { TaskPropTypes } from './TaskTypes'

const taskSlice = createSlice({
  name: 'task',
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

export const { addTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer
