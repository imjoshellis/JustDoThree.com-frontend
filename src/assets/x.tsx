import React, { FunctionComponent } from 'react'

interface XPropTypes {
  className: string
}

export const X: FunctionComponent<XPropTypes> = ({ className }) => (
  <>
    <svg
      className={className}
      fill='currentColor'
      width='100pt'
      height='100pt'
      version='1.1'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m31.758 49.941-29.398-29.516 18.066-18.066 29.516 29.398 29.516-29.398 18.184 18.066-29.52 29.516 29.52 29.516-18.184 18.184-29.516-29.52-29.516 29.52-18.066-18.184z'
        fill-rule='evenodd'
      />
    </svg>
  </>
)

export default X
