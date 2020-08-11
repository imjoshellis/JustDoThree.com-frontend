import React, { FunctionComponent } from 'react'
import TaskContainer from './TaskContainer'
import { TaskPropTypes } from './TaskContainer'

interface Props {
  tasks: TaskPropTypes[] | undefined
}

export const TaskBlock: FunctionComponent<Props> = ({ tasks }) => {
  let classes = {
    base: 'bg-gray-90 rounded-lg rounded-b overflow-hidden',
    hover: ''
  }
  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden' />

      <div className='p-2'>
        <h2 className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'>kind</h2>
        {tasks && tasks.map((t) => <TaskContainer key={t.id} {...t} />)}
      </div>
    </div>
  )
}

export default TaskBlock
