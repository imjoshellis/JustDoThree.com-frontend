import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface DueDateViewProps {
  dueDate: moment.Moment
  overdue: boolean
  soon: boolean
  completed: boolean
  hover: boolean
  setEditing: (n: number) => void
  id: number
}

export const DueDateView: React.FC<DueDateViewProps> = ({
  dueDate,
  overdue,
  soon,
  completed,
  hover,
  setEditing,
  id
}) => {
  const shortDate = dueDate.format('MMM DD')
  return (
    <>
      <button
        className={`flex items-center h-6 justify-between px-1 ml-1 text-xs whitespace-no-wrap border border-transparent rounded text-gray-30 hover:border-solid transition duration-200 ease-out hover:ease-in ${
          completed
            ? 'text-gray-30'
            : soon
            ? 'text-cyan-40'
            : overdue
            ? 'text-red-50'
            : ''
        }`}
        onDoubleClick={() => setEditing(id)}
      >
        <AnimatePresence initial={false}>
          {hover ? (
            <motion.span
              key='date'
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
                mass: 0.8
              }}
              className='ml-1'
            >
              {shortDate}
            </motion.span>
          ) : (
            <motion.span
              key='icon'
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
                mass: 0.8
              }}
            >
              <FlagIcon className='h-3' />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </>
  )
}

export default DueDateView

function FlagIcon (props: any) {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
      />
    </svg>
  )
}
