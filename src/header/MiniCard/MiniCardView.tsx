import React, { FunctionComponent } from 'react'
import TaskContainer from '../../task/TaskContainer'
import { MiniCardPropTypes } from './MiniCardTypes'

const classes = {
  base:
    'px-4 py-2 bg-gray-90 rounded grid grid-cols-4 items-center gap-1 text-sm font-bold'
}

export const MiniCardView: FunctionComponent<MiniCardPropTypes> = ({ kind }) => (
  <div className={classes.base}>
    <div>{kind}</div>
    {/* <TaskContainer name='n' completed={true} dotOnly={true} disabled={true} /> */}
    {/* <TaskContainer name='n' completed={false} dotOnly={true} disabled={true} /> */}
    {/* <TaskContainer name='n' completed={false} dotOnly={true} disabled={true} /> */}
  </div>
)

export default MiniCardView
