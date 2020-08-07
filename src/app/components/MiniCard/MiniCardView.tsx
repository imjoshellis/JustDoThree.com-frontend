import React, { FunctionComponent } from 'react'
import Dot from '../Task/Dot'
import { MiniCardPropTypes } from './MiniCardTypes'

export const MiniCardView: FunctionComponent<MiniCardPropTypes> = ({ kind }) => (
  <div className='px-4 py-2 bg-gray-800 rounded grid grid-cols-4 items-center gap-1 text-sm font-bold'>
    <div>{kind}</div>
    <Dot />
    <Dot />
    <Dot />
  </div>
)

export default MiniCardView
