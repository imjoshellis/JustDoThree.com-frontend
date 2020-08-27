import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/reducer'
import DueDateContainer from './DueDateContainer'
import { changeTask } from './tasksSlice'
import { motion, AnimatePresence } from 'framer-motion'

interface TaskViewProps {
  id: string
  dotOnly?: boolean
  disabled?: boolean
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
  setEditing: (id: string) => void
  hover: boolean
}

export const TaskView: React.FC<TaskViewProps> = ({
  id,
  disabled,
  setEditing,
  hover
}) => {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const task = useSelector((state: RootState) => state.tasks[id])
  useEffect(() => setChecked(task.completed), [task])
  return (
    <div className='flex flex-grow transition duration-200'>
      <AnimatePresence>
        <motion.div
          className='flex items-stretch justify-between flex-grow p-1 px-2 transition duration-200'
          initial={{ backgroundColor: 'rgba(50,50,50,1)' }}
          animate={{ backgroundColor: 'rgba(50,50,50,0)' }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`flex items-center flex-1 justify-between truncate w-full transition-all duration-200 rounded cursor-pointer select-none ${
              disabled === true ? 'pointer-events-none' : ''
            } ${task.completed ? 'opacity-50' : ''}`}
          >
            <form className='flex items-center flex-grow truncate'>
              <input
                type='checkbox'
                disabled={disabled}
                name={'task-' + id}
                className={`check-input rounded border-solid border-2 appearance-none p-15 w-1 h-1 relative focus:outline-none focus:border-4 focus:border-blue-50 transition duration-200 cursor-pointer hover:border-gray-60 ${
                  task.completed
                    ? 'border-gray-50 bg-gray-50 text-gray-90'
                    : 'border-gray-80 bg-gray-100 text-gray-10'
                }`}
                checked={checked || false}
                onChange={() =>
                  dispatch(changeTask({ ...task, completed: !task.completed }))
                }
              />
              <label
                className='flex-grow ml-2 text-sm text-left truncate cursor-pointer'
                onDoubleClick={() => setEditing(id)}
              >
                {task.title}
              </label>
            </form>
            {task.dueDate !== undefined &&
              task.dueDate !== null &&
              task.dueDate.length > 0 && (
                <DueDateContainer
                  dueDate={moment(task.dueDate)}
                  completed={task.completed}
                  hover={hover}
                  id={id}
                  setEditing={setEditing}
                />
              )}
          </div>
          <button
            onClick={() => setEditing(id)}
            className={`${
              !hover ? 'h-6 self-center' : ''
            } p-1 transition duration-200 ml-1 bg-opacity-50 rounded border-2 border-gray-70 border-opacity-50 bg-gray-70 hover:bg-green-50 hover:bg-opacity-75 text-gray-30 focus:border-green-60 focus:outline-none`}
          >
            <PencilAltIcon className='h-3' />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TaskView

function PencilAltIcon (props: any): JSX.Element {
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
