import { Task } from "./task.model"
import { User } from "./user.model"

export type State = {
    tasks: Task[]
    isLoading: boolean
    users: User[]
}