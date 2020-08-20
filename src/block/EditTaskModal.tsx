import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TextInput from '../components/TextInput'
import SubmitButton from '../components/SubmitButton'
import { TaskTypes } from '../task/tasksSlice'

interface EditTaskModalProps {
  editing: number
  setEditing: (n: number) => void
  editingTask: TaskTypes
  valid: boolean
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({
  editing,
  setEditing,
  editingTask,
  valid
}) => (
  <>
    <AnimatePresence>
      {editing !== 0 && (
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
                  setEditing(0)
                }}
                className='flex flex-col'
              >
                <TextInput
                  text={editingTask.title}
                  handleChange={() => null}
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

export default EditTaskModal
