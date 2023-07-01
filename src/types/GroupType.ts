import { TaskType } from "./TaskType"

export type GroupType = {
    id: string,
    title: string,
    description: string,
    tasks: TaskType[]
}