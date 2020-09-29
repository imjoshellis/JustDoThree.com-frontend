import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'

export const Main: React.FC = () => {
  return (
    <section className='p-8 m-8'>
      <Route path='/login'>
        <Login />
      </Route>
    </section>
  )
}

export default Main
