import React, { FunctionComponent } from 'react'
import { TaskBlock } from '../task'

export const MainView: FunctionComponent = () => {
  let classes = {
    base: 'grid grid-flow-row grid-rows-2 grid-cols-4 gap-4 m-8 p-8'
  }
  return (
    <section className={classes.base}>
      <TaskBlock kind='Life' />
      <TaskBlock kind='Y: 2020' />
      <TaskBlock kind='Y: 2021' />
      <TaskBlock kind='Y: 2022' />
      <TaskBlock kind='Q3: 2020' />
      <TaskBlock kind='Q4: 2020' />
      <TaskBlock kind='Q1: 2021' />
      <TaskBlock kind='Q2: 2021' />
    </section>
  )
}

export default MainView
