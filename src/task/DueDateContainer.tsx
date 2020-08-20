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
  completed: boolean
  hover: boolean
}

interface DueDateContainerState {
  open: boolean
}

export class DueDateContainer extends Component<
  DueDateContainerProps,
  DueDateContainerState
> {
  constructor (props: DueDateContainerProps) {
    super(props)

    this.state = {
      open: false
    }
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render () {
    const overdue = this.props.dueDate.isBefore(moment())
    const soon = this.props.dueDate.isAfter(moment().add(1, 'y'))

    return (
      <>
        <DueDateView
          dueDate={this.props.dueDate}
          overdue={overdue}
          soon={soon}
          onClick={() => this.open()}
          completed={this.props.completed}
          hover={this.props.hover}
        />
      </>
    )
  }
}

export default DueDateContainer
