import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import DueDateView from './DueDateView'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

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

interface DueDateContainerProps {}

interface DueDateContainerState {
  date: moment.Moment
  open: boolean
}

export class DueDateContainer extends Component<
  DueDateContainerProps,
  DueDateContainerState
> {
  constructor (props: DueDateContainerProps) {
    super(props)

    this.state = {
      date: moment().add(
        Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1),
        'd'
      ),
      open: false
    }
  }

  handleChangeDate = (date: Date) => this.setState({ date: moment(date) })
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render () {
    const overdue = this.state.date.isBefore(moment())
    const date = overdue
      ? this.state.date.fromNow()
      : this.state.date.isAfter(moment().add(1, 'y'))
      ? this.state.date.format('M/Y')
      : this.state.date.format('MMM D')

    return (
      <>
        <DatePicker
          open={this.state.open}
          onClickOutside={this.close}
          onSelect={this.close}
          todayButton='Today'
          showYearDropdown
          dateFormatCalendar='MMMM'
          yearDropdownItemNumber={3}
          scrollableYearDropdown
          selected={this.state.date.toDate()}
          onChange={this.handleChangeDate}
          customInput={<></>}
          closeOnScroll={true}
        />
        <DueDateView
          date={date}
          overdue={overdue}
          onClick={() => this.open()}
        />
      </>
    )
  }
}

export default DueDateContainer
