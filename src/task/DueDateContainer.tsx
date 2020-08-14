import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import DueDateView from './DueDateView'
import moment from 'moment'

interface DueDateContainerProps {}

interface DueDateContainerState {
  date: Date
}

export class DueDateContainer extends Component<
  DueDateContainerProps,
  DueDateContainerState
> {
  constructor (props: DueDateContainerProps) {
    super(props)

    this.state = {
      date: moment()
        .add(Math.random() * 100 * (Math.random() < 0.5 ? -1 : 1), 'd')
        .toDate()
    }
  }

  handleChangeDate = (date: any) => this.setState({ date: date })

  render () {
    const mDate = moment(this.state.date)
    const overdue = mDate.isBefore(moment())
    const date = overdue ? mDate.fromNow() : mDate.format('MMM D')

    return (
      <>
        <DatePicker
          selected={this.state.date}
          onChange={this.handleChangeDate}
          customInput={<DueDateView date={date} overdue={overdue} />}
        />
      </>
    )
  }
}

export default DueDateContainer
