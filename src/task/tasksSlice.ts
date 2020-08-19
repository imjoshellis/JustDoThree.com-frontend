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
      const { title } = action.payload
      const id = (Math.random() * 77) % 2
      state = {
        ...state,
        [id]: {
          id: id,
          title,
          completed: false
        }
      }
    },
    toggleTask (state, action) {
      const t = state[action.payload]
      if (t) {
        t.completed = !t.completed
      }
    }
  }
})

export const { addTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
