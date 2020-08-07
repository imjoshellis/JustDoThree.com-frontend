import React, { FunctionComponent } from 'react'
import { DotPropTypes } from './DotTypes'

export const DotView: FunctionComponent<DotPropTypes> = ({ status, hover }) => {
  return (
    <>
     {status === 'done' ? <div className={`rounded-full w-4 h-4 border-solid border-2 border-blue-600 ${hover ? 'bg-blue-800' : 'bg-blue-600'}`}
    /> : <div className={`rounded-full w-4 h-4 border-solid border-2 border-blue-600 ${hover ? 'bg-blue-200' : 'bg-blue-900'}`}/>}
    </>
  )
}

export default DotView
