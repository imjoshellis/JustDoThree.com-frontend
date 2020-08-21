import moment from 'moment'

export const data = {
  entities: {
    blocks: {
      1: {
        id: 1,
        title: 'Life',
        level: 0,
        blockList: [2, 3, 4],
        taskList: [1, 2, 3]
      },
      2: {
        id: 2,
        title: 'Y2020',
        level: 1,
        blockList: [5, 6, 7, 8],
        taskList: [4, 5]
      },
      3: {
        id: 3,
        title: 'Y2021',
        level: 1,
        blockList: [9, 10, 11, 12],
        taskList: []
      },
      4: {
        id: 4,
        title: 'Y2022',
        level: 1,
        blockList: [],
        taskList: []
      },
      5: {
        id: 5,
        title: 'Q1 2020',
        level: 2,
        blockList: [],
        taskList: []
      },
      6: {
        id: 6,
        title: 'Q2 2020',
        level: 2,
        blockList: [],
        taskList: []
      },
      7: {
        id: 7,
        title: 'Q3 2020',
        level: 2,
        blockList: [],
        taskList: []
      },
      8: {
        id: 8,
        title: 'Q4 2020',
        level: 2,
        blockList: [],
        taskList: []
      },
      9: {
        id: 9,
        title: 'Q1 2021',
        level: 2,
        blockList: [],
        taskList: []
      },
      10: {
        id: 10,
        title: 'Q2 2021',
        level: 2,
        blockList: [],
        taskList: []
      },
      11: {
        id: 11,
        title: 'Q3 2021',
        level: 2,
        blockList: [],
        taskList: []
      },
      12: {
        id: 12,
        title: 'Q4 2021',
        level: 2,
        blockList: [],
        taskList: []
      }
    },
    tasks: {
      1: {
        completed: false,
        dueDate: moment()
          .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
          .toISOString(),
        id: 1,
        title: 'I became a Senior Developer at a high growth organization'
      },
      2: {
        completed: true,
        dueDate: moment()
          .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
          .toISOString(),
        id: 2,
        title: 'I published a board game'
      },
      3: {
        completed: false,
        dueDate: moment()
          .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
          .toISOString(),
        id: 3,
        title: 'I ran a marathon'
      },
      4: {
        completed: false,
        dueDate: moment()
          .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
          .toISOString(),
        id: 4,
        title: 'I did one thing this year'
      },
      5: {
        completed: true,
        dueDate: moment()
          .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
          .toISOString(),
        id: 5,
        title: 'I did another thing this year'
      }
    }
  }
}
