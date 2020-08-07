import React, { FunctionComponent } from 'react'
import Task from '../Task'
import { CardPropTypes } from './CardTypes'

export const CardView: FunctionComponent<CardPropTypes> = ({ kind }) => (
  <div className='bg-gray-800 rounded overflow-hidden'>
    <div className='h-32 overflow-hidden'>
      <img src='https://images.unsplash.com/photo-1596806970810-8734072b5d4d' alt='alt' />
    </div>

    <div className='p-4'>
      <h2 className='uppercase text-sm font-bold tracking-wider mb-2'>{kind}</h2>
      <Task name='Task' status='done' />
      <Task name='Task' />
      <Task name='Task' />
    </div>
  </div>
)

export default CardView
