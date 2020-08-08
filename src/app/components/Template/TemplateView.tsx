import React, { FunctionComponent } from 'react'
import { TemplatePropTypes } from './TemplateTypes'

export const TemplateView: FunctionComponent<TemplatePropTypes> = () => {
  let classes = {
    base: ''
  }
  return <div className={classes.base} />
}

export default TemplateView
