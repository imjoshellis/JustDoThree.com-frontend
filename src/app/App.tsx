import React from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App () {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <Header />
      <section className='grid grid-flow-row grid-rows-2 grid-cols-4 gap-4 m-8 p-8'>
        <Card kind='Life' />
        <Card kind='Y: 2020' />
        <Card kind='Y: 2021' />
        <Card kind='Y: 2022' />
        <Card kind='Q3: 2020' />
        <Card kind='Q4: 2020' />
        <Card kind='Q1: 2021' />
        <Card kind='Q2: 2021' />
      </section>
    </div>
  )
}

export default App
