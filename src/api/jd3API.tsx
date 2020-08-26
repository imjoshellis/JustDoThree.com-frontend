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
