export interface TaskPropTypes {
  name: string,
  status?: 'done' | 'doing' | 'todo',
  handleChange?: () => void,
  hover?: boolean,
  hideLabel?: boolean
}

export interface TaskStateTypes {
  hover?: boolean,
  status?: 'done' | 'doing' | 'todo'
}