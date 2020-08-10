import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dotOnly?: boolean
  hover?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
}

export interface TaskStateTypes {
  hover?: boolean
}
