export interface TaskPropTypes {
  name: string,
  status?: 'done' | 'doing' | 'todo',
  dotOnly?: boolean
}

export interface TaskStateTypes {
  hover?: boolean,
  status?: 'done' | 'doing' | 'todo'
}