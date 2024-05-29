import { Task } from "./task.model";
import { User } from "./user.model";

export type Project = {
    id: string;
    name: string;
    url: string;
    description: string;
    category: ProjectCategory;
    createdAt: string;
    updateAt: string;
    tasks: Task[];
    users: User[];
    isLoading: boolean,
}

export enum ProjectCategory {
    SOFTWARE = 'Software',
    MARKETING = 'Marketing',
    BUSINESS = 'Business'
  }