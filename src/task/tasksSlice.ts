import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface TaskTypes {
  id: number
  title: string
  dueDate?: string
  completed: boolean
}

export interface TaskObj {
  [id: number]: TaskTypes
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.entities.tasks as TaskObj,
  reducers: {
    addTask (state, action) {
      const { title, id } = action.payload
      state[id] = {
        id: id,
        title,
        completed: false
      }
    },
    editTask (state, action) {
      const task = action.payload
      state[task.id] = task
    },
    toggleTask (state, action) {
      const t = state[action.payload]
      if (t) {
        t.completed = !t.completed
      }
    }
  }
})

export const { addTask, editTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
