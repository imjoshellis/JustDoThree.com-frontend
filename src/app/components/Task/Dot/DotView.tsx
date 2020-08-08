import React, { FunctionComponent } from 'react'
import { DotPropTypes } from './DotTypes'

const base = 'rounded-full w-3 h-3 border-solid border-2 border-blue-60 p-1 block'
const classes = {
  done: {
    idle: base + ' bg-blue-60',
    hover: base + ' bg-blue-80'
  },
  todo: {
    idle: base + ' bg-blue-90',
    hover: base + ' bg-blue-20'
  }
}

export const DotView: FunctionComponent<DotPropTypes> = ({ status, hover }) => {
  if (status === 'done')
    return <div className={hover ? classes.done.hover : classes.done.idle} />
  if (status === 'todo')
    return <div className={hover ? classes.todo.hover : classes.todo.idle} />
  return null
}

export default DotView
