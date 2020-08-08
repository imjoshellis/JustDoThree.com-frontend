import React, { FunctionComponent } from 'react'

interface CheckPropTypes {
  className: string
}

export const Check: FunctionComponent<CheckPropTypes> = ({ className }) => (
  <>
<svg className={className} fill='currentColor' width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <path d="m83.746 10.93-45.32 45.5-22.172-22.258-16.25 16.32 38.41 38.578 61.582-61.828z"/>
</svg>
</>
)

export default Check