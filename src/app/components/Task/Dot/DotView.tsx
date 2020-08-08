import React, { FunctionComponent } from 'react'
import { DotPropTypes } from './DotTypes'

const classes = {
  base: 'rounded-full w-4 h-4 border-solid border-2 border-blue-60',
  done: {
    idle: 'bg-blue-60',
    hover: 'bg-blue-80'
  },
  todo: {
    idle: 'bg-blue-20',
    hover: 'bg-blue-90'
  }
}

export const DotView: FunctionComponent<DotPropTypes> = ({ status, hover }) => {
  if (status === 'done') return <div className={classes.base} />
  if (status === 'todo') return <div className={classes.base} />
  return null
}

export default DotView
