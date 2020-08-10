export interface TaskPropTypes {
  name: string
  completed: boolean
  dotOnly?: boolean
  handleClick?: () => void
  hover?: boolean
  disabled?: boolean
}

export interface TaskStateTypes {
  hover?: boolean
  completed: boolean
}
