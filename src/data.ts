import moment from 'moment'

export const data = {
  entities: {
    blocks: {
      1: {
        id: 1,
        title: 'Life',
        level: 0,
        taskList: [1, 2, 3]
      },
      2: {
        id: 2,
        title: 'Y2020',
        level: 1,
        taskList: [4, 5]
      },
      3: {
        id: 3,
        title: 'Y2021',
        level: 1,
        taskList: []
      }
    },
    tasks: {
      1: {
        completed: false,
        // dueDate: moment()
        // .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
        // .toDate(),
        id: 1,
        title: 'I became a Senior Developer at a high growth organization'
      },
      2: {
        completed: true,
        // dueDate: moment()
        // .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
        // .toDate(),
        id: 2,
        title: 'I published a board game'
      },
      3: {
        completed: false,
        // dueDate: moment()
        // .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
        // .toDate(),
        id: 3,
        title: 'I ran a marathon'
      },
      4: {
        completed: false,
        // dueDate: moment()
        // .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
        id: 4,
        title: 'I did one thing this year'
      },
      5: {
        completed: true,
        // dueDate: moment()
        // .add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd')
        // .toISOString(),
        id: 5,
        title: 'I did another thing this year'
      }
    }
  }
}
