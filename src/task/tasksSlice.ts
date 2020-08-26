import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTasks, TaskAPI } from '../api/jd3API'
import { AppThunk } from '../app/store'

export interface TaskTypes {
  id: string
  title: string
  dueDate?: string
  completed: boolean
  blockId: string
  blockTitle: string
}

export interface TaskObj {
  [id: string]: TaskTypes
}

const initialState: TaskObj = {}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask (state, action) {
      const { title, id, block } = action.payload
      state[id] = {
        id: id,
        title,
        blockId: block.id,
        blockTitle: block.title,
        completed: false
      }
    },
    deleteTask (state, action) {
      const { id } = action.payload
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state[id]
    },
    editTask (state, action) {
      const task = action.payload
      state[task.id] = task
    },
    toggleTask (state, action) {
      const t = state[action.payload]
      t.completed = !t.completed
    },
    getTasksSuccess (state, action: PayloadAction<TaskAPI[]>) {
      action.payload.forEach(t => {
        state[t.id] = {
          id: t.id,
          title: t.attributes.title,
          dueDate: t.attributes.due_date,
          blockId: t.attributes.block_id,
          blockTitle: t.attributes.block_title,
          completed: t.attributes.completed
        }
      })
    },
    getTasksFailed (state, action: PayloadAction<string>) {
      console.log(action.payload)
    }
  }
})

export const {
  addTask,
  deleteTask,
  editTask,
  toggleTask,
  getTasksSuccess,
  getTasksFailed
} = tasksSlice.actions

export default tasksSlice.reducer

export const fetchTasks = (): AppThunk => async dispatch => {
  try {
    const tasks = await getTasks()
    dispatch(getTasksSuccess(tasks))
  } catch (err) {
    dispatch(getTasksFailed(err.toString()))
  }
}
