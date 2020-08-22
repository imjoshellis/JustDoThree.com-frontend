import moment from 'moment'
import shortid from 'shortid'

const blocks = [
  {
    id: shortid.generate(),
    title: 'Life',
    level: 0,
    blockList: [] as string[],
    taskList: [] as string[]
  },
  {
    id: shortid.generate(),
    title: 'Y2020',
    level: 1,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Y2021',
    level: 1,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Y2022',
    level: 1,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Q1 2020',
    level: 2,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Q2 2020',
    level: 2,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Q3 2020',
    level: 2,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Q4 2020',
    level: 2,
    blockList: [],
    taskList: []
  },
  {
    id: shortid.generate(),
    title: 'Q5 2020',
    level: 2,
    blockList: [],
    taskList: []
  }
]

const tasks = [
  {
    completed: false,
    dueDate: moment()
      .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
      .toISOString(),
    id: shortid.generate(),
    title: 'I became a Senior Developer at a high growth organization',
    blockId: ''
  },
  {
    completed: true,
    dueDate: moment()
      .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
      .toISOString(),
    id: shortid.generate(),
    title: 'I published a board game',
    blockId: ''
  },
  {
    completed: false,
    dueDate: moment()
      .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
      .toISOString(),
    id: shortid.generate(),
    title: 'I ran a marathon',
    blockId: ''
  },
  {
    completed: false,
    dueDate: moment()
      .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
      .toISOString(),
    id: shortid.generate(),
    title: 'I did one thing this year',
    blockId: ''
  },
  {
    completed: true,
    dueDate: moment()
      .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
      .toISOString(),
    id: shortid.generate(),
    title: 'I did another thing this year',
    blockId: ''
  }
]

blocks[0].taskList = [tasks[0].id, tasks[1].id, tasks[2].id]
tasks[0].blockId = blocks[0].id
tasks[1].blockId = blocks[0].id
tasks[2].blockId = blocks[0].id
blocks[0].blockList = [blocks[1].id, blocks[2].id, blocks[3].id]
blocks[1].blockList = [
  blocks[4].id,
  blocks[5].id,
  blocks[6].id,
  blocks[7].id,
  blocks[8].id
]
blocks[1].taskList = [tasks[3].id, tasks[4].id]
tasks[3].blockId = blocks[1].id
tasks[4].blockId = blocks[1].id

const convertArrayToObject = (array: any, key: string): object => {
  const initialValue = {}
  return array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item[key]]: item
    }
  }, initialValue)
}

export const data = {
  entities: {
    blocks: convertArrayToObject(blocks, 'id'),
    tasks: convertArrayToObject(tasks, 'id')
  }
}

export default data
