import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface TaskTypes {
  id: number
  title: string
  dueDate?: moment.Moment
  completed: boolean
  block: number
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.entities.tasks as TaskTypes[],
  reducers: {
    addTask (state, action) {
      const { title, block } = action.payload
      state.push({
        id: (Math.random() * 77) % 2,
        title,
        block: block.id,
        completed: false
      })
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
