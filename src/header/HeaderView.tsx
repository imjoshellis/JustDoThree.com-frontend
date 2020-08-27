import React from 'react'
import { connect } from 'react-redux'
import { TaskPropTypes } from '../task/TaskContainer'
import { HeaderPropTypes } from './HeaderTypes'
import { Link } from 'react-router-dom'

export const HeaderView: React.FC<HeaderPropTypes> = ({ tasks }) => (
  <header className='fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between p-4 px-16 bg-gray-900'>
    <div className='text-xl font-bold'>Just Do Three</div>
    <div className='flex gap-3'>
      <Link
        className='flex items-center justify-center p-1 px-3 text-xs font-bold tracking-wider uppercase transition duration-200 rounded hover:bg-gray-70 bg-gray-90'
        to='/'
      >
        soon
      </Link>
      <Link
        className='flex items-center justify-center p-1 px-3 text-xs font-bold tracking-wider uppercase transition duration-200 rounded hover:bg-gray-70 bg-gray-90'
        to='/today'
      >
        today
      </Link>
      <Link
        className='flex items-center justify-center p-1 px-3 text-xs font-bold tracking-wider uppercase transition duration-200 rounded hover:bg-gray-70 bg-gray-90'
        to='/all'
      >
        all
      </Link>
    </div>
    {/*
      <div className='grid flex-grow max-w-3xl grid-cols-6 gap-4'>
        <MiniCard kind='L' tasks={tasks} />
        <MiniCard kind='Y' tasks={tasks} />
        <MiniCard kind='Q' tasks={tasks} />
        <MiniCard kind='M' tasks={tasks} />
        <MiniCard kind='W' tasks={tasks} />
        <MiniCard kind='D' tasks={tasks} />
      </div>
      <div className='flex flex-col items-center justify-center ml-4'>
        <div className='w-8 h-1 mb-1 bg-gray-700' />
        <div className='w-8 h-1 mb-1 bg-gray-700' />
        <div className='w-8 h-1 bg-gray-700' />
      </div> */}
  </header>
)

const mapStateToProps = (state: { tasks: TaskPropTypes[] }): any => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(HeaderView)
