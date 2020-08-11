import React, { FunctionComponent } from 'react'
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
  let checkBase =
    'check-input rounded border-solid border mt-1 appearance-none p-15 w-1 h-1 relative'
  if (disabled) {
    checkBase += ' pointer-events-none'
  }
  let classes = {
    base: 'p-1 px-2 w-full rounded flex',
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
    label: 'ml-2 text-left'
  }

  const checkboxClass = completed ? classes.checkbox.done : classes.checkbox.todo

  if (!dotOnly) {
    classes.base += ' focus:bg-gray-80 mt-1'
  }
  const handleChange = () => null

  return (
    <form className={hover ? classes.base + ' ' + classes.hover : classes.base}>
      <input
        type='checkbox'
        name={'task-' + id}
        className={hover && !dotOnly ? checkboxClass.hover : checkboxClass.idle}
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      {dotOnly || <label className={classes.label}>{title}</label>}
    </form>
  )
}

export default TaskView
