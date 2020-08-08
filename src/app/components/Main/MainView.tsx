import React, { FunctionComponent } from 'react'
import Card from '../Card'
import { MainPropTypes } from './MainTypes'

export const MainView: FunctionComponent<MainPropTypes> = () => {
  let classes = {
    base: 'grid grid-flow-row grid-rows-2 grid-cols-4 gap-4 m-8 p-8'
  }
  return (
    <section className={classes.base}>
      <Card kind='Life' />
      <Card kind='Y: 2020' />
      <Card kind='Y: 2021' />
      <Card kind='Y: 2022' />
      <Card kind='Q3: 2020' />
      <Card kind='Q4: 2020' />
      <Card kind='Q1: 2021' />
      <Card kind='Q2: 2021' />
    </section>
  )
}

export default MainView
