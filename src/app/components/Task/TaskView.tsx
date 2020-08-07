import React, { FunctionComponent } from 'react'
import Dot from './Dot'
import { TaskPropTypes } from './TaskTypes'

export const TaskView: FunctionComponent<TaskPropTypes> = ({ name, status }) => (
  <div className='flex flex-row items-center'>
    <Dot status={status} />
    <span className='w-2' />
    {name}
  </div>
)

export default TaskView
