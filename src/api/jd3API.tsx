import axios from 'axios'
import { BlockTypes } from '../block/blocksSlice'
import { TaskTypes } from '../task/tasksSlice'
import { DropResult } from 'react-beautiful-dnd'

export interface BlockAPI {
  id: string
  type: string
  attributes: {
    title: string
    kind: string
    block_list: string
    task_list: string
    start_date: string
    end_date: string
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

export interface MoveTaskPayload {
  id: string
  start: BlockTypes
  end: BlockTypes
  source: DropResult['source']
  destination: DropResult['destination']
}

export async function moveTaskPatch (
  payload: MoveTaskPayload
): Promise<BlockAPI | BlockAPI[]> {
  const url = `http://localhost:5000/blocks/`
  const { id, start, end, source, destination } = payload

  if (
    destination === undefined ||
    (destination.droppableId === source.droppableId &&
      destination.index === source.index)
  ) {
    return []
  }

  if (start !== undefined && start === end) {
    const newTaskList = start.taskList.filter(
      (_: any, idx: number) => idx !== source.index
    )
    newTaskList.splice(destination.index, 0, id)

    const { data } = await axios.patch<BlockData>(url + `/${start.id}`, {
      task_list:
        newTaskList.length > 1 ? newTaskList.join(',') : newTaskList.join('')
    })
    return data.data
  } else {
    const startTaskList = Array.from(start.taskList)
    startTaskList.splice(source.index, 1)

    const sourceData = await axios.patch<{ data: BlockAPI }>(
      url + `/${start.id}`,
      {
        task_id: id,
        task_list:
          startTaskList.length > 1
            ? startTaskList.join(',')
            : startTaskList.join('')
      }
    )

    const endTaskList = Array.from(end.taskList)
    endTaskList.splice(destination.index, 0, id)

    const destinationData = await axios.patch<{ data: BlockAPI }>(
      url + `/${end.id}`,
      {
        task_id: id,
        task_list:
          endTaskList.length > 1 ? endTaskList.join(',') : endTaskList.join('')
      }
    )
    return [sourceData.data.data, destinationData.data.data]
  }
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

export async function postTask ({
  title,
  block
}: {
  title: string
  block: BlockTypes
}): Promise<TaskAPI[]> {
  const url = `http://localhost:5000/tasks/`
  const railsTask = {
    title,
    block_id: block.id
  }

  const { data } = await axios.post<TaskData>(url, railsTask)
  return data.data
}

export async function deleteTask ({ id }: { id: string }): Promise<TaskAPI[]> {
  const url = `http://localhost:5000/tasks/${id}`

  const { data } = await axios.delete<TaskData>(url)
  return data.data
}

export async function patchTask (task: TaskTypes): Promise<TaskAPI[]> {
  const url = `http://localhost:5000/tasks/${task.id}`

  const { data } = await axios.patch<TaskData>(url, {
    ...task,
    block_id: task.blockId,
    due_date: task.dueDate
  })
  return data.data
}
