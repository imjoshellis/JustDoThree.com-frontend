import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlockAPI, getBlocks } from '../api/jd3API'
import { AppThunk } from '../app/store'
import { addTask, deleteTask } from '../task/tasksSlice'

export interface BlockTypes {
  id: string
  title: string
  kind: string
  blockList: string[]
  taskList: string[]
}

export interface BlockObj {
  [id: string]: BlockTypes
}

const initialState: BlockObj = {}

const blockSlice = createSlice({
  name: 'blocks',
  initialState: initialState,
  reducers: {
    moveTask (state, action) {
      const { id, start, end, source, destination } = action.payload
      if (
        destination === undefined ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      ) {
        return
      }

      if (start !== undefined && start === end) {
        const newTaskList = start.taskList.filter(
          (_: any, idx: number) => idx !== source.index
        )
        newTaskList.splice(destination.index, 0, id)

        state[start.id] = {
          ...start,
          taskList: newTaskList
        }
      } else {
        const startTaskList = Array.from(start.taskList)
        startTaskList.splice(source.index, 1)
        state[start.id] = {
          ...start,
          taskList: startTaskList
        }
        const endTaskList = Array.from(end.taskList)
        endTaskList.splice(destination.index, 0, id)
        state[end.id] = {
          ...end,
          taskList: endTaskList
        }
      }
    },
    getBlocksSuccess (state, action: PayloadAction<BlockAPI[]>) {
      action.payload.forEach(b => {
        state[b.id] = {
          id: b.id,
          title: b.attributes.title,
          kind: b.attributes.kind,
          taskList:
            b.attributes.task_list.length > 0
              ? b.attributes.task_list.split(',')
              : [],
          blockList:
            b.attributes.block_list.length > 0
              ? b.attributes.block_list.split(',')
              : []
        }
      })
    },
    getBlocksFailed (state, action: PayloadAction<string>) {
      console.log(action.payload)
    }
  },
  extraReducers: builder =>
    builder
      .addCase(addTask, (state, action) => {
        const { id, block } = action.payload
        const newTaskList = block.taskList.concat()
        newTaskList.push(id)

        state[block.id] = {
          ...block,
          taskList: newTaskList
        }
      })
      .addCase(deleteTask, (state, action) => {
        const { id, blockId } = action.payload
        const block = state[blockId]
        const newTaskList = block.taskList.filter(
          (taskId: string) => taskId !== id
        )
        state[block.id] = {
          ...block,
          taskList: newTaskList
        }
      })
})

export const {
  moveTask,
  getBlocksSuccess,
  getBlocksFailed
} = blockSlice.actions

export default blockSlice.reducer

export const fetchBlocks = (): AppThunk => async dispatch => {
  try {
    const blocks = await getBlocks()
    dispatch(getBlocksSuccess(blocks))
  } catch (err) {
    dispatch(getBlocksFailed(err.toString()))
  }
}
