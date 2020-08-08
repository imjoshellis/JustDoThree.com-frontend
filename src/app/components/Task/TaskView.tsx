import { Checkbox } from 'carbon-components-react'
import React, { FunctionComponent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TaskPropTypes } from './TaskTypes'

export const TaskView: FunctionComponent<TaskPropTypes> = ({
  name,
  status,
  handleChange,
  hideLabel
}) => {
  return (
    <Checkbox
      checked={status === 'done'}
      hideLabel={hideLabel}
      labelText={name}
      id={uuidv4()}
      onChange={handleChange}
    />
  )
}

export default TaskView
