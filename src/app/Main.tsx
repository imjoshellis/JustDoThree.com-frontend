import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { TaskBlock } from '../task'
import { TaskPropTypes } from '../task/TaskContainer'

interface Props {
  tasks?: TaskPropTypes[]
}

export const MainView: FunctionComponent<Props> = ({ tasks }) => {
  let classes = {
    base: 'grid grid-flow-row grid-rows-2 grid-cols-4 gap-4 m-8 p-8'
  }

  return (
    <section className={classes.base}>
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
    </section>
  )
}

const mapStateToProps = (state: { tasks: TaskPropTypes[] }) => {
  console.log(state)
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(MainView)
