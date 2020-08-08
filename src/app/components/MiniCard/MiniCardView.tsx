import React, { FunctionComponent } from 'react'
import Task from '../Task'
import { MiniCardPropTypes } from './MiniCardTypes'

const classes = {
  base:
    'px-4 py-2 bg-gray-90 rounded grid grid-cols-4 items-center gap-1 text-sm font-bold'
}

export const MiniCardView: FunctionComponent<MiniCardPropTypes> = ({ kind }) => (
  <div className={classes.base}>
    <div>{kind}</div>
    <Task name='n' dotOnly={true} />
    <Task name='n' dotOnly={true} />
    <Task name='n' dotOnly={true} />
  </div>
)

export default MiniCardView
