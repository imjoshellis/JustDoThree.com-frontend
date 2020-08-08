import React, { FunctionComponent } from 'react'
import Task from '../Task'
import { MiniCardPropTypes } from './MiniCardTypes'

export const MiniCardView: FunctionComponent<MiniCardPropTypes> = ({ kind }) => (
  <div className='px-4 py-2 bg-gray-800 rounded grid grid-cols-4 items-center gap-1 text-sm font-bold'>
    <div>{kind}</div>
    <Task name='n' dotOnly={true} />
    <Task name='n' dotOnly={true} />
    <Task name='n' dotOnly={true} />
  </div>
)

export default MiniCardView
