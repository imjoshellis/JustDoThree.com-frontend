import { TaskPropTypes } from "../../task/TaskContainer";

export interface MiniCardPropTypes {
  kind: string
  tasks: TaskPropTypes[] | undefined
}