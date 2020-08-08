import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App () {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <Header />
      <Main />
    </div>
  )
}

export default App
