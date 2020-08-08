import React, { FunctionComponent } from 'react'
import Check from '../../../../assets/check'
import X from '../../../../assets/x'
import { DotPropTypes } from './DotTypes'

const base =
  'rounded border-solid border block items-center justify-center flex text-gray-10 w-4 h-4'
const classes = {
  done: {
    idle: base + ' border-gray-60 bg-gray-60 text-gray-90',
    hover: base + ' border-red-40 bg-red-70 text-red-40'
  },
  todo: {
    idle: base + ' border-gray-60 bg-gray-100 text-gray-10',
    hover: base + ' border-blue-40 bg-blue-70 text-blue-40'
  }
}

export const DotView: FunctionComponent<DotPropTypes> = ({ status, hover }) => {
  if (status === 'done')
    return (
      <div className={hover ? classes.done.hover : classes.done.idle}>
        {hover ? <X className='block w-2 h-2' /> : <Check className='block w-2 h-2' />}
      </div>
    )
  if (status === 'todo')
    return (
      <div className={hover ? classes.todo.hover : classes.todo.idle}>
        {hover && <Check className='block w-2 h-2' />}
      </div>
    )
  return null
}

export default DotView
