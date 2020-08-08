export interface TaskPropTypes {
  name: string,
  status: 'done' | 'todo',
  dotOnly?: boolean,
  handleClick?: () => void,
  hover?: boolean,
  disabled?: boolean
}

export interface TaskStateTypes {
  hover?: boolean,
  status: 'done' | 'todo'
}