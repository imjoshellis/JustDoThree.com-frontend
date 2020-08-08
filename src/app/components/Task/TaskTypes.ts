export interface TaskPropTypes {
  name: string,
  status?: 'done' | 'doing' | 'todo',
  dotOnly?: boolean,
  handleClick?: () => void,
  hover?: boolean
}

export interface TaskStateTypes {
  hover?: boolean,
  status?: 'done' | 'doing' | 'todo'
}