import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface BlockTypes {
  [id: number]: {
    id: number
    title: string
    level: number
    taskList: number[]
  }
}

const blockSlice = createSlice({
  name: 'blocks',
  initialState: data.entities.blocks as BlockTypes,
  reducers: {}
})

export default blockSlice.reducer
