import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getTasks,
  TaskAPI,
  postTask,
  deleteTask,
  patchTask
} from '../api/jd3API'
import { AppThunk } from '../app/store'
import { BlockTypes } from '../block/blocksSlice'

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
      const { id } = action.payload
      const { title, completed } = action.payload.attributes
      state[id] = {
        id,
        title,
        blockId: action.payload.attributes.block_id,
        blockTitle: action.payload.attributes.block_title,
        completed
      }
    },
    removeTask (state, action) {
      const { id } = action.payload
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state[id]
    },
    editTask (state, action) {
      const { id, attributes } = action.payload
      state[id] = {
        id: id,
        completed: attributes.completed,
        blockId: attributes.block_id,
        title: attributes.title,
        blockTitle: attributes.block_title,
        dueDate: attributes.due_date
      }
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
    asyncTaskActionFailed (state, action: PayloadAction<string>) {
      console.log(action.payload)
    }
  }
})

export const {
  addTask,
  removeTask,
  editTask,
  toggleTask,
  getTasksSuccess,
  asyncTaskActionFailed
} = tasksSlice.actions

export default tasksSlice.reducer

export const fetchTasks = (): AppThunk => async dispatch => {
  try {
    const tasks = await getTasks()
    dispatch(getTasksSuccess(tasks))
  } catch (err) {
    dispatch(asyncTaskActionFailed(err.toString()))
  }
}

export const pushTask = ({
  title,
  block
}: {
  title: string
  block: BlockTypes
}): AppThunk => async dispatch => {
  try {
    const newTask = await postTask({ title, block })
    dispatch(addTask(newTask))
  } catch (err) {
    dispatch(asyncTaskActionFailed(err.toString()))
  }
}

export const popTask = ({ id }: { id: string }): AppThunk => async dispatch => {
  try {
    const newTask = await deleteTask({ id })
    dispatch(removeTask(newTask))
  } catch (err) {
    dispatch(asyncTaskActionFailed(err.toString()))
  }
}

export const changeTask = (task: TaskTypes): AppThunk => async dispatch => {
  try {
    const newTask = await patchTask(task)
    dispatch(editTask(newTask))
  } catch (err) {
    dispatch(asyncTaskActionFailed(err.toString()))
  }
}
