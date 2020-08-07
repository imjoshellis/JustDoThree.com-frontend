import React from 'react'
import './App.css'
import Card from './components/Card'
import MiniCard from './components/MiniCard'
import Task from './components/Task'

function App () {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <header className='z-50 flex flex-row items-center justify-between bg-gray-900 p-4 px-16 fixed top-0 left-0 right-0 '>
        <div>Just Do Three</div>
        <div className='grid grid-cols-6 gap-4 flex-grow max-w-3xl'>
          <MiniCard kind='L' />
          <MiniCard kind='Y' />
          <MiniCard kind='Q' />
          <MiniCard kind='M' />
          <MiniCard kind='W' />
          <MiniCard kind='D' />
        </div>
        <div className='flex flex-col items-center justify-center ml-4'>
          <div className='h-1 w-8 mb-1 bg-gray-700' />
          <div className='h-1 w-8 mb-1 bg-gray-700' />
          <div className='h-1 w-8 bg-gray-700' />
        </div>
      </header>
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
      <footer className='flex flex-row items-center bg-gray-800 p-4 px-16 fixed bottom-0 left-0 right-0'>
        <div className='mr-4'>BIG 3:</div>
        <div className='grid grid-cols-3 gap-2'>
          <Task name='Task 1' />
          <Task name='Task 2' />
          <Task name='Task 3' />
        </div>
      </footer>
    </div>
  )
}

export default App
