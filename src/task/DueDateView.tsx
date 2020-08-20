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
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
          clipRule='evenodd'
        />
      </svg>
      <span className='ml-1'>{date}</span>
    </button>
  </>
)

export default DueDateView
