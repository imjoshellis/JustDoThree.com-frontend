import React, { FunctionComponent } from 'react'
import TaskBlockGrid from '../task/TaskBlockGrid'
import { TaskPropTypes } from '../task/TaskContainer'

interface Props {
  tasks?: TaskPropTypes[]
}

export const Main: FunctionComponent<Props> = () => {
  let classes = {
    base: 'm-8 p-8'
  }

  return (
    <section className={classes.base}>
      <TaskBlockGrid />
    </section>
  )
}

export default Main
