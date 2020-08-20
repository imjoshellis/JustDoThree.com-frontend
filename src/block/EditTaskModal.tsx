import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'
import { TaskTypes } from '../task/tasksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import moment from 'moment'
import DatePicker from 'react-date-picker'

interface EditTaskModalProps {
  setEditing: (n: number) => void
  editingTask: TaskTypes
  editTask: ActionCreatorWithPayload<TaskTypes>
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({
  setEditing,
  editingTask,
  editTask
}) => {
  const [task, setTask] = useState<TaskTypes | undefined>(undefined)

  useEffect(() => setTask(editingTask), [editingTask])

  let valid = task && task.title ? task.title.length > 0 : false

  return (
    <>
      <AnimatePresence>
        {task && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'circOut'
              }}
              className='absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75'
            >
              <div
                className='absolute top-0 bottom-0 left-0 right-0 z-0'
                onClick={() => setEditing(0)}
              />
              <div className='z-10 flex flex-col w-full max-w-sm p-4 rounded bg-gray-90'>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    editTask(task)
                    setEditing(0)
                  }}
                  className='flex flex-col'
                >
                  <TextInput
                    text={task.title}
                    label='title'
                    handleChange={e => {
                      setTask({ ...task, title: e.target.value })
                    }}
                    autoFocus={true}
                    valid={valid}
                  />
                  <label className='p-1 pl-2 mt-2 text-xs font-bold tracking-wider uppercase'>
                    DUE DATE
                  </label>
                  <DatePicker
                    onChange={(d: any) => {
                      d
                        ? setTask({ ...task, dueDate: moment(d).toISOString() })
                        : setTask({ ...task, dueDate: undefined })
                    }}
                    calendarIcon={<CalendarIcon className='h-3 text-blue-50' />}
                    clearIcon={<XIcon className='h-3 text-red-50' />}
                    value={task.dueDate ? moment(task.dueDate).toDate() : null}
                    calendarClassName='bg-gray-95 border-gray-70 rounded border-2'
                  />
                  <div className='flex justify-between mt-2 overflow-hidden text-sm rounded'>
                    <button
                      type='reset'
                      onClick={e => {
                        e.preventDefault()
                        setEditing(0)
                      }}
                      className='p-1 px-2 text-xs font-bold tracking-wider uppercase rounded bg-red-50'
                    >
                      cancel
                    </button>
                    <SubmitButton valid={valid} text='update' />
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default EditTaskModal

function CalendarIcon (props: any) {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      />
    </svg>
  )
}

function XIcon (props: any) {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
