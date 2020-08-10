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
  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden'>
        <img src='' alt='alt' />
      </div>

      <div className='p-2'>
        <h2 className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'>{kind}</h2>
        <TaskContainer name='Task' completed={true} />
        <TaskContainer name='Task' completed={false} />
        <TaskContainer name='Task' completed={false} />
      </div>
    </div>
  )
}

export default TaskBlock
