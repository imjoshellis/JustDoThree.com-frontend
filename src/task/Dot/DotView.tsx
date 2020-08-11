import React, { FunctionComponent } from 'react'
import Check from '../../assets/check'
import X from '../../assets/x'
import { DotPropTypes } from './DotTypes'

const base =
  'rounded border-solid border block items-center justify-center flex text-gray-10 w-4 h-4 mt-1'
const classes = {
  done: {
    idle: base + ' border-gray-60 bg-gray-60 text-gray-90',
    hover: base + ' border-gray-40 bg-gray-70 text-gray-10 opacity-50'
  },
  todo: {
    idle: base + ' border-gray-60 bg-gray-100 text-gray-10',
    hover: base + ' border-gray-40 bg-gray-70 text-gray-10 opacity-50'
  }
}

export const DotView: FunctionComponent<DotPropTypes> = ({ completed, hover }) => {
  if (completed)
    return (
      <div className={hover ? classes.done.hover : classes.done.idle}>
        {hover ? <X className='block w-2 h-2' /> : <Check className='block w-2 h-2' />}
      </div>
    )
  if (!completed)
    return (
      <div className={hover ? classes.todo.hover : classes.todo.idle}>
        {hover && <Check className='block w-2 h-2' />}
      </div>
    )
  return null
}

export default DotView
