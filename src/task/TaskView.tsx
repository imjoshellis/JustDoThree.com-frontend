import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import moment from 'moment'
import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import DueDateContainer from './DueDateContainer'

interface TaskViewProps {
  id: number
  title: string
  completed: boolean
  dueDate?: moment.Moment
  dotOnly?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
  setEditing: (id: number) => void
  hover: boolean
}

export const TaskView: React.FC<TaskViewProps> = ({
  id,
  title,
  dueDate,
  completed,
  toggleTask,
  dotOnly,
  disabled,
  setEditing,
  hover
}) => (
  <div className='flex items-stretch transition duration-200'>
    <div
      className={`flex items-center flex-1 justify-between truncate w-full px-2 transition-all duration-200 rounded cursor-pointer select-none ${disabled &&
        'pointer-events-none'} ${completed && 'opacity-50'}`}
    >
      <form className='flex items-center truncate'>
        <input
          type='checkbox'
          disabled={disabled}
          name={'task-' + id}
          className={`check-input rounded border-solid border-2 appearance-none p-15 w-1 h-1 relative focus:outline-none focus:border-4 focus:border-blue-50 transition duration-200 cursor-pointer hover:border-gray-60 ${
            completed
              ? 'border-gray-50 bg-gray-50 text-gray-90'
              : 'border-gray-80 bg-gray-100 text-gray-10'
          }`}
          checked={completed}
          onChange={() => toggleTask(id)}
        />
        {dotOnly || (
          <>
            <label className='ml-2 text-sm text-left truncate pointer-events-none'>
              {title}
            </label>
          </>
        )}
      </form>
      {dueDate && (
        <DueDateContainer
          dueDate={moment(dueDate)}
          completed={completed}
          hover={hover}
        />
      )}
    </div>
    <button
      onClick={() => setEditing(id)}
      className={`${
        !hover ? 'h-6 self-center' : ''
      } p-1 transition duration-200 bg-opacity-50 rounded bg-gray-70 hover:bg-green-50 hover:bg-opacity-75 text-gray-30`}
    >
      <PencilAltIcon className='h-3' />
    </button>
  </div>
)

export default TaskView

function PencilAltIcon (props: any) {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      />
    </svg>
  )
}
