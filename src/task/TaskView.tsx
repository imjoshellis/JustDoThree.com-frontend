import React, { FunctionComponent } from 'react'
import Dot from './Dot'
import { TaskPropTypes } from './TaskTypes'

export const TaskView: FunctionComponent<TaskPropTypes> = ({
  id,
  title,
  completed,
  hover,
  toggleTask,
  dotOnly
}) => {
  let classes = {
    base: 'flex flex-row items-start p-1 px-2 w-full rounded focus:bg-gray-80 mt-1',
    hover: dotOnly ? '' : 'bg-gray-80',
    title: 'ml-2 flex-grow text-left'
  }

  // if (disabled) return (
  //   <div
  //     className={classes.base}
  //   >
  //     <Dot completed={completed} hover={false} />
  //     { dotOnly || <><span className='w-2' /> {title}</> }
  //   </div>
  // )
  return (
    <button
      onClick={() => toggleTask(id)}
      className={hover ? classes.base + ' ' + classes.hover : classes.base}
    >
      <Dot completed={completed} hover={hover} />
      <span className={classes.title}>{title}</span>
    </button>
  )
}

export default TaskView
