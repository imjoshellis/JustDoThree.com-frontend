import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'
import { TaskTypes } from '../task/tasksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

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
                duration: 0.3,
                ease: 'circOut'
              }}
              className='absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75'
            >
              <div
                className='absolute top-0 bottom-0 left-0 right-0 z-0'
                onClick={() => setEditing(0)}
              />
              <div className='z-10 flex flex-col p-4 rounded bg-gray-90'>
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
                    handleChange={e => {
                      setTask({ ...task, title: e.target.value })
                    }}
                    valid={valid}
                  />
                  <div className='flex justify-between mt-2'>
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
