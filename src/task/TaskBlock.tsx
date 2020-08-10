import React, { FunctionComponent } from 'react'
import TaskContainer from './TaskContainer'

interface Props {
  kind: string
}

export const TaskBlock: FunctionComponent<Props> = ({ kind }) => {
  let classes = {
    base: 'bg-gray-90 rounded-lg rounded-b overflow-hidden',
    hover: ''
  }
  const tasks = [
    {
      id: 1,
      title: 'I became a Senior Developer at a high growth organization',
      completed: false,
      start: new Date(2020, 0, 0),
      deadline: new Date(2025, 11, 31),
      kind: 'life',
      kind_id: 1
    },
    {
      id: 2,
      title: 'I published a board game',
      completed: false,
      kind: 'life',
      kind_id: 1
    },
    {
      id: 3,
      title: 'I ran a marathon',
      completed: false,
      kind: 'life',
      kind_id: 1
    }
  ]
  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden' />

      <div className='p-2'>
        <h2 className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'>{kind}</h2>
        {tasks.map((t) => <TaskContainer key={t.id} {...t} />)}
      </div>
    </div>
  )
}

export default TaskBlock
