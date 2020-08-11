import { TaskPropTypes } from "../../task/TaskTypes";

export interface MiniCardPropTypes {
  kind: string
  tasks: TaskPropTypes[] | undefined
}