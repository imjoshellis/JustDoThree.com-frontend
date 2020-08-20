import React from 'react'

interface DueDateViewProps {
  date: string
  overdue: boolean
  onClick: () => void
  soon: boolean
  completed: boolean
}

export const DueDateView: React.FC<DueDateViewProps> = ({
  date,
  overdue,
  onClick,
  soon,
  completed
}) => (
  <>
    <button
      className={`flex items-center h-6 px-1 ml-1 text-xs whitespace-no-wrap border border-transparent rounded text-gray-30 hover:border-solid hover:border-gray-70 transition duration-200 ease-out hover:ease-in ${
        completed
          ? 'text-gray-30'
          : soon
          ? 'text-cyan-40'
          : overdue
          ? 'text-red-50'
          : ''
      }`}
      onClick={onClick}
    >
      <svg
        className='h-3'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
        />
      </svg>
      <span className='ml-1'>{date}</span>
    </button>
  </>
)

export default DueDateView
