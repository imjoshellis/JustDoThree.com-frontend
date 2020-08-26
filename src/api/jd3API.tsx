import axios from 'axios'

export interface BlockAPI {
  id: string
  type: string
  attributes: {
    title: string
    kind: string
    block_list: string
    task_list: string
  }
}

export interface BlockData {
  data: BlockAPI[]
}

export async function getBlocks (): Promise<BlockAPI[]> {
  const url = `http://localhost:5000/blocks/`

  const { data } = await axios.get<BlockData>(url)
  return data.data
}

export interface TaskAPI {
  id: string
  type: string
  attributes: {
    title: string
    due_date: string
    block_id: string
    block_title: string
    completed: boolean
  }
}

export interface TaskData {
  data: TaskAPI[]
}

export async function getTasks (): Promise<TaskAPI[]> {
  const url = `http://localhost:5000/tasks/`

  const { data } = await axios.get<TaskData>(url)
  return data.data
}
