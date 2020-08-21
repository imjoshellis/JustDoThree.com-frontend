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
  setEditing: (n: number) => void
  completed: boolean
  hover: boolean
  id: number
}

interface DueDateContainerState {}

export class DueDateContainer extends Component<
  DueDateContainerProps,
  DueDateContainerState
> {
  constructor (props: DueDateContainerProps) {
    super(props)

    this.state = {}
  }

  render () {
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
