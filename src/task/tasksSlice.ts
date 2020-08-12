import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface TaskTypes {
  id: number
  title: string
  completed: boolean
  block: number
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.entities.tasks as TaskTypes[],
  reducers: {
    addTask (state, action) {
      const { id, title, block } = action.payload
      state.push({ id, title, block, completed: false })
    },
    toggleTask (state, action) {
      const t = state.find(t => t.id === action.payload)
      if (t) {
        t.completed = !t.completed
      }
    }
  }
})

export const { addTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
