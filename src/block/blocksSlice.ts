import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface BlockTypes {
  id: number
  title: string
  level: number
  taskList: number[]
}

export interface BlockObj {
  [id: number]: BlockTypes
}

const blockSlice = createSlice({
  name: 'blocks',
  initialState: data.entities.blocks as BlockObj,
  reducers: {}
})

export default blockSlice.reducer
