import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../header'
import Footer from './Footer'
import Main from './Main'

const App: React.FC = (): JSX.Element => (
  <Router>
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <Header />
      <Main />
      <Footer />
    </div>
  </Router>
)

export default App
