import moment from 'moment'

export const data = {
  entities: {
    blocks: [
      {
        id: 1,
        title: 'Life',
        level: 0
      },
      {
        id: 2,
        title: 'Y2020',
        level: 1
      },
      {
        id: 3,
        title: 'Y2021',
        level: 1
      }
    ],
    tasks: [
      {
        block: 1,
        completed: false,
        dueDate: moment().add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd'),
        id: 1,
        title: 'I became a Senior Developer at a high growth organization'
      },
      {
        block: 1,
        completed: true,
        dueDate: moment().add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd'),
        id: 2,
        title: 'I published a board game'
      },
      {
        block: 1,
        completed: false,
        dueDate: moment().add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd'),
        id: 3,
        title: 'I ran a marathon'
      },
      {
        block: 2,
        completed: false,
        dueDate: moment().add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd'),
        id: 4,
        title: 'I did one thing this year'
      },
      {
        block: 2,
        completed: true,
        dueDate: moment().add(Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1), 'd'),
        id: 5,
        title: 'I did another thing this year'
      }
    ]
  }
}
