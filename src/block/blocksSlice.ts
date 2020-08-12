import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export interface BlockTypes {
  id: number
  title: string
  level: number
}

const blockSlice = createSlice({
  name: 'blocks',
  initialState: data.entities.blocks as BlockTypes[],
  reducers: {}
})

export default blockSlice.reducer
