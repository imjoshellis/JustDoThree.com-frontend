import React from 'react'
import TaskContainer from '../../task/TaskContainer'
import { MiniCardPropTypes } from './MiniCardTypes'

const classes = {
  base:
    'px-4 py-2 bg-gray-90 rounded grid grid-cols-4 items-center gap-1 text-sm font-bold'
}

export const MiniCardView: React.FC<MiniCardPropTypes> = ({ kind, tasks }) => (
  <div className={classes.base}>
    <div>{kind}</div>
    {tasks &&
      tasks.map(t => (
        <TaskContainer key={t.id} {...t} dotOnly={true} disabled={true} />
      ))}
  </div>
)

export default MiniCardView
