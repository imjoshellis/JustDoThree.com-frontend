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
  disabled
}) => {
  let checkBase =
    'check-input rounded border-solid border-2 mt-1 appearance-none p-15 w-1 h-1 relative cursor-pointer hover:border-gray-60'
  if (disabled) {
    checkBase += ' pointer-events-none'
  }
  let classes = {
    base:
      'p-1 px-2 w-full rounded flex select-none cursor-pointer transition-all duration-200 ease-out hover:bg-gray-85',
    checkbox: {
      done: checkBase + ' border-gray-70 bg-gray-70 text-gray-90',
      todo: checkBase + ' border-gray-80 bg-gray-100 text-gray-10'
    },
    label: {
      base: 'ml-2 text-left transition-all duration-200 cursor-pointer',
      done: 'opacity-50'
    }
  }

  const checkboxClass = completed
    ? classes.checkbox.done
    : classes.checkbox.todo

  if (!dotOnly) {
    classes.base += ' focus:bg-gray-80 mt-1'
  }

  return (
    <form className={classes.base} onClick={() => toggleTask(id)}>
      <input
        type='checkbox'
        disabled={disabled}
        name={'task-' + id}
        className={checkboxClass}
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      {dotOnly || (
        <label
          className={
            completed
              ? classes.label.base + ' ' + classes.label.done
              : classes.label.base
          }
        >
          {title}
        </label>
      )}
    </form>
  )
}

export default TaskView
