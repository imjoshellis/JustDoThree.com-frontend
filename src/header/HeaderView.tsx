import React, { FunctionComponent } from 'react'
import MiniCard from './MiniCard'
import { HeaderPropTypes } from './HeaderTypes'

export const HeaderView: FunctionComponent<HeaderPropTypes> = () => {
  let classes = {
    base:
      'z-50 flex flex-row items-center justify-between bg-gray-900 p-4 px-16 fixed top-0 left-0 right-0 ',
    hover: ''
  }
  return (
    <header className={classes.base}>
      <div>Just Do Three</div>
      <div className='grid flex-grow max-w-3xl grid-cols-6 gap-4'>
        <MiniCard kind='L' />
        <MiniCard kind='Y' />
        <MiniCard kind='Q' />
        <MiniCard kind='M' />
        <MiniCard kind='W' />
        <MiniCard kind='D' />
      </div>
      <div className='flex flex-col items-center justify-center ml-4'>
        <div className='w-8 h-1 mb-1 bg-gray-700' />
        <div className='w-8 h-1 mb-1 bg-gray-700' />
        <div className='w-8 h-1 bg-gray-700' />
      </div>
    </header>
  )
}

export default HeaderView