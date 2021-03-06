import React, { Component } from 'react'
import DueDateView from './DueDateView'
import moment from 'moment'

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    ss: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dm',
    MM: '%dm',
    y: '%dy',
    yy: '%dy'
  }
})

interface DueDateContainerProps {
  dueDate: moment.Moment
  setEditing: (id: string) => void
  completed: boolean
  hover: boolean
  id: string
}

export class DueDateContainer extends Component< DueDateContainerProps > {
  constructor (props: DueDateContainerProps) {
    super(props)

    this.state = {}
  }

  render (): JSX.Element {
    const overdue = this.props.dueDate.isBefore(moment())
    const soon = this.props.dueDate.isAfter(moment().add(1, 'y'))

    return (
      <>
        <DueDateView overdue={overdue} soon={soon} {...this.props} />
      </>
    )
  }
}

export default DueDateContainer
