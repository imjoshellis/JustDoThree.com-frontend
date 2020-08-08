import React, { FunctionComponent } from 'react'
import Dot from './Dot'
import { TaskPropTypes } from './TaskTypes'

export const TaskView: FunctionComponent<TaskPropTypes> = ({
  name,
  status,
  handleClick,
  hover,
  dotOnly,
  disabled
}) => {
  let classes = {
    base: 'flex flex-row items-center p-1 w-full rounded focus:bg-gray-80',
    hover: dotOnly ? '' : 'font-bold bg-gray-70'
  }

  if (disabled) return (
    <div
      className={classes.base}
    >
      <Dot status={status} hover={false} />
      { dotOnly || <><span className='w-2' /> {name}</> }
    </div>
  )
  return (
    <button
      onClick={handleClick}
      className={hover ? classes.base + ' ' + classes.hover : classes.base}
    >
      <Dot status={status} hover={hover} />
      { dotOnly || <><span className='w-2' /> {name}</> }
    </button>
  )
}

export default TaskView
