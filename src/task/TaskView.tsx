import React, { FunctionComponent } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dotOnly?: boolean
  hover: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  toggleEdit: () => void
  editing: boolean
}

export const TaskView: FunctionComponent<TaskPropTypes> = ({
  id,
  title,
  completed,
  hover,
  toggleTask,
  dotOnly,
  toggleEdit,
  editing,
  disabled
}) => {
  let checkBase =
    'check-input rounded border-solid border mt-1 appearance-none p-15 w-1 h-1 relative'
  if (disabled) {
    checkBase += ' pointer-events-none'
  }
  let classes = {
    base: 'p-1 px-2 w-full rounded flex select-none',
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

  const checkboxClass = completed
    ? classes.checkbox.done
    : classes.checkbox.todo

  if (!dotOnly) {
    classes.base += ' focus:bg-gray-80 mt-1'
  }

  if (hover) {
    classes.base = classes.base
      .split(' ')
      .filter(c => c !== 'truncate')
      .join(' ')
  }

  return (
    <form className={hover ? classes.base + ' ' + classes.hover : classes.base}>
      <input
        type='checkbox'
        disabled={disabled}
        name={'task-' + id}
        className={hover && !dotOnly ? checkboxClass.hover : checkboxClass.idle}
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      {dotOnly || (
        <label onDoubleClick={() => toggleEdit()} className={classes.label}>
          {title}
        </label>
      )}
    </form>
  )
}

export default TaskView
