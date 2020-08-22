import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'
import { addTask, deleteTask } from '../task/tasksSlice'

export interface BlockTypes {
  id: string
  title: string
  level: number
  blockList: string[]
  taskList: string[]
}

export interface BlockObj {
  [id: string]: BlockTypes
}

const blockSlice = createSlice({
  name: 'blocks',
  initialState: data.entities.blocks as BlockObj,
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
    }
  },
  extraReducers: (builder) =>
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
        const newTaskList = block.taskList.filter((taskId: string) => taskId !== id)
        state[block.id] = {
          ...block,
          taskList: newTaskList
        }
      })
})

export const { moveTask } = blockSlice.actions

export default blockSlice.reducer
