import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AnimatePresence, motion } from 'framer-motion'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'
import TextInput from '../components/TextInput'
import { TaskTypes } from '../task/tasksSlice'

interface EditTaskModalProps {
  setEditing: (id: string) => void
  editingTask: TaskTypes | null
  editTask: ActionCreatorWithPayload<TaskTypes>
  deleteTask: ActionCreatorWithPayload<TaskTypes>
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  setEditing,
  editingTask,
  editTask,
  deleteTask
}) => {
  const [task, setTask] = useState<TaskTypes | null>(null)
  const { height, width } = useWindowDimensions()

  const valid = task?.title !== undefined ? task?.title?.length > 0 : false

  useEffect(() => {
    setTask(editingTask)
  }, [editingTask])

  useEffect(() => {
    if (valid && task !== null) {
      editTask(task)
    }
  }, [task, editTask, valid])

  const deleteThisTask = (): void => {
    setEditing('')
    if (task !== null && task !== undefined) {
      deleteTask(task)
    }
  }

  return (
    <>
      <AnimatePresence>
        {task !== null && (
          <>
            <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center duration-100 bg-gray-100 bg-opacity-25 transition-color'>
              <motion.div
                initial={{
                  opacity: 0,
                  top: height / 2,
                  bottom: height / 2,
                  left: width / 2,
                  right: width / 2,
                  borderRadius: height / 4
                }}
                animate={{
                  opacity: 1,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderRadius: 0
                }}
                transition={{
                  duration: 0.1
                }}
                className='absolute z-0 bg-gray-100 bg-opacity-75 shadow-2xl'
                onClick={() => setEditing('')}
              />
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 700, damping: 20 }}
                className='z-10 flex flex-col w-full max-w-sm p-4 rounded bg-gray-90'
              >
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    setEditing('')
                    editTask(task)
                  }}
                  className='flex flex-col'
                >
                  <TextInput
                    text={task.title}
                    label='title'
                    handleChange={e => {
                      setTask({ ...task, title: e.target.value })
                    }}
                    handleKeyPress={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        setEditing('')
                      }
                    }}
                    autoFocus={true}
                    valid={valid}
                  />
                  <label className='p-1 pl-2 mt-2 text-xs font-bold tracking-wider uppercase'>
                    DUE DATE
                  </label>
                  <div className='flex'>
                    <DatePicker
                      onChange={(d: any) => {
                        d !== undefined
                          ? setTask({
                              ...task,
                              dueDate: moment(d).toISOString()
                            })
                          : setTask({ ...task, dueDate: '' })
                      }}
                      calendarIcon={
                        <CalendarIcon className='h-3 text-blue-50' />
                      }
                      clearIcon={<XIcon className='h-3 text-red-50' />}
                      value={
                        task.dueDate !== undefined
                          ? moment(task.dueDate).toDate()
                          : null
                      }
                      className='flex-grow'
                      calendarClassName='bg-gray-95 border-gray-70 rounded border-2'
                    />
                    <button
                      type='button'
                      onClick={e => {
                        e.preventDefault()
                        setTask({ ...task, dueDate: moment().toISOString() })
                      }}
                      className='p-1 px-2 ml-1 text-xs font-bold tracking-wider uppercase transition duration-200 ease-out rounded bg-gray-80 hover:ease-in hover:bg-gray-70'
                    >
                      TODAY
                    </button>
                  </div>
                  <div className='flex justify-between mt-2 overflow-hidden text-sm rounded'></div>
                </form>
                <button onClick={() => deleteThisTask()}>DELETE</button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default EditTaskModal

function CalendarIcon (props: any): JSX.Element {
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

function XIcon (props: any): JSX.Element {
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

function getWindowDimensions (): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const useWindowDimensions = (): { width: number; height: number } => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize (): void {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
