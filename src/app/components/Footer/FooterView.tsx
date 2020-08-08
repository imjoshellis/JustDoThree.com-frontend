import React, { FunctionComponent } from 'react'
import { FooterPropTypes } from './FooterTypes'

export const FooterView: FunctionComponent<FooterPropTypes> = () => {
  let classes = {
    base: ''
  }
  return <div className={classes.base} />
}

export default FooterView
