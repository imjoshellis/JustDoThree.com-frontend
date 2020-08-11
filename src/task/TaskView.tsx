import React, { FunctionComponent } from 'react'
import Dot from './Dot'
import { TaskPropTypes } from './TaskTypes'

export const TaskView: FunctionComponent<TaskPropTypes> = ({
  id,
  title,
  completed,
  hover,
  toggleTask,
  dotOnly,
  disabled
}) => {
  const checkBase =
    'rounded border-solid border block items-center justify-center flex text-gray-10 w-4 h-4 mt-1'
  let classes = {
    base: 'flex flex-row items-start p-1 px-2 w-full rounded',
    hover: dotOnly ? '' : 'bg-gray-80',
    checkbox: {
      done: {
        idle: checkBase + ' border-gray-60 bg-gray-60 text-gray-90',
        hover: checkBase + ' border-gray-40 bg-gray-70 text-gray-10 opacity-50'
      },
      todo: {
        idle: checkBase + ' border-gray-60 bg-gray-100 text-gray-10',
        hover: checkBase + ' border-gray-40 bg-gray-70 text-gray-10 opacity-50'
      }
    },
    label: 'ml-2 flex-grow text-left'
  }

  const checkboxClass = completed ? classes.checkbox.done : classes.checkbox.todo

  if (!dotOnly) {
    classes.base += ' focus:bg-gray-80 mt-1'
  }
  /*
  if (disabled)
    return (
      <div className={hover ? classes.base + ' ' + classes.hover : classes.base}>
        <Dot completed={completed} hover={false} />
        {dotOnly || <span className={classes.title}>{title}</span>}
      </div>
    )
*/
  const handleChange = () => null

  return (
    <form className={hover ? classes.base + ' ' + classes.hover : classes.base}>
      <input
        type='checkbox'
        name={'task-' + id}
        className={hover ? checkboxClass.hover : checkboxClass.idle}
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      {dotOnly || <label className={classes.label}>{title}</label>}
    </form>
  )
}

export default TaskView
