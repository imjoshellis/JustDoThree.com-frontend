export interface DotPropTypes {
  status?: 'done' | 'doing' | 'todo',
  hover?: boolean
}

export interface DotStateTypes {
  hover: boolean,
  status?: 'done' | 'doing' | 'todo'
}