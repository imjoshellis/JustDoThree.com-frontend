import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface TaskTypes {
  id: string
  title: string
  dueDate?: string
  completed: boolean
  blockId: string
}

export interface TaskObj {
  [id: string]: TaskTypes
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.entities.tasks as TaskObj,
  reducers: {
    addTask (state, action) {
      const { title, id, block } = action.payload
      state[id] = {
        id: id,
        title,
        blockId: block.id,
        completed: false
      }
    },
    deleteTask (state, action) {
      const { id } = action.payload
      delete state[id]
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

export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
