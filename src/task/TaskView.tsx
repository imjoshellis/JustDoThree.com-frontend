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
      base: 'ml-2 text-left text-sm transition-all duration-200 cursor-pointer',
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
    <div className='flex items-center justify-between'>
      <form className={classes.base} onClick={() => toggleTask(id)}>
        <input
          type='checkbox'
          disabled={disabled}
          name={'task-' + id}
          className={checkboxClass}
          checked={completed}
        />
        {dotOnly || (
          <>
            <label
              className={
                completed
                  ? classes.label.base + ' ' + classes.label.done
                  : classes.label.base
              }
            >
              {title}
            </label>
          </>
        )}
      </form>
      <div className='flex items-center h-8 p-1 px-2 ml-1 text-xs whitespace-no-wrap border rounded border-gray-85 text-gray-30'>
        <svg
          className='h-3'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fill-rule='evenodd'
            d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
            clip-rule='evenodd'
          />
        </svg>
        <span className='ml-1'>Aug 31</span>
      </div>
    </div>
  )
}

export default TaskView
