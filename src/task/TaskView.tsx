import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import moment from 'moment'
import React, { FunctionComponent } from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import DueDateContainer from './DueDateContainer'

interface Props {
  id: number
  title: string
  completed: boolean
  dueDate?: moment.Moment
  dotOnly?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  isDragging: boolean
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}

export const TaskView: FunctionComponent<Props> = ({
  id,
  title,
  dueDate,
  completed,
  toggleTask,
  dotOnly,
  isDragging,
  disabled
}) => (
  <div
    className={`flex items-center justify-between w-full px-2 transition-all duration-200 rounded cursor-pointer select-none ${disabled &&
      'pointer-events-none'} ${completed && 'opacity-50'}`}
  >
    <form className='flex items-center'>
      <input
        type='checkbox'
        disabled={disabled || isDragging}
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
          <label className='ml-2 text-sm text-left transition-all duration-200 pointer-events-none'>
            {title}
          </label>
        </>
      )}
    </form>
    {dueDate && (
      <DueDateContainer dueDate={moment(dueDate)} completed={completed} />
    )}
  </div>
)

export default TaskView
