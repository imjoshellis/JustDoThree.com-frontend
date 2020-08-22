import React from 'react'
import Footer from './Footer'
import Header from '../header'
import Main from './Main'

function App (): JSX.Element {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
