
import { NzModalRef } from 'ng-zorro-antd/modal';

export enum TaskType {
  STORY = 'Story',
  TASK = 'Task',
  BUG = 'Bug'
}

export enum TaskStatus {
  BACKLOG = 'Backlog',
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const TaskStatusDisplay = {
  [TaskStatus.BACKLOG]: 'Backlog',
  [TaskStatus.IN_PROGRESS]: 'In progress',
  [TaskStatus.DONE]: 'Done'
};

export enum TaskPriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}

export const TaskPriorityColors = {
  [TaskPriority.HIGHEST]: '#CD1317',
  [TaskPriority.HIGH]: '#E9494A',
  [TaskPriority.MEDIUM]: '#E97F33',
  [TaskPriority.LOW]: '#2D8738',
  [TaskPriority.LOWEST]: '#57A55A'
};
export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  projectId: string;
}


export class TaskPriorityIcon {
    icon: string;
    value: string;
    color: string;
  
    constructor(taskPriority: TaskPriority) {
      const lowerPriorities = [TaskPriority.LOW, TaskPriority.LOWEST];
      this.value = taskPriority;
      this.icon = lowerPriorities.includes(taskPriority) ? 'arrow-down' : 'arrow-up';
      this.color = TaskPriorityColors[taskPriority];
    }
}



export class TaskUtil {
  static getIssueTypeIcon(taskType: TaskType): string {
    return taskType?.toLowerCase();
  }

  static getIssuePriorityIcon(taskPriority: TaskPriority): TaskPriorityIcon {
    return new TaskPriorityIcon(taskPriority);
  }

  static getRandomId(): string {
    return `${Math.ceil(Math.random() * 8000)}`;
  }

  static searchString(str: string, searchString: string): boolean {
    str = str ?? '';
    searchString = searchString ?? '';
    return str.trim().toLowerCase().includes(searchString.trim().toLowerCase());
  }
}


export class DeleteIssueModel {
  constructor(public issueId: string, public deleteModalRef: NzModalRef) {}
}

export class TaskTypeWithIcon {
    value: string;
    icon: string;
  
    constructor(taskType: TaskType) {
      this.value = taskType;
      this.icon = TaskUtil.getIssueTypeIcon(taskType);
    }
}

export class ProjectConst {
    /* eslint-disable @typescript-eslint/naming-convention */
    static readonly IssueId = 'taskId';
    static readonly Projects = 'Projects';
    static PrioritiesWithIcon: TaskPriorityIcon[] = [
      TaskUtil.getIssuePriorityIcon(TaskPriority.LOWEST),
      TaskUtil.getIssuePriorityIcon(TaskPriority.LOW),
      TaskUtil.getIssuePriorityIcon(TaskPriority.MEDIUM),
      TaskUtil.getIssuePriorityIcon(TaskPriority.HIGH),
      TaskUtil.getIssuePriorityIcon(TaskPriority.HIGHEST)
    ];
  
    static IssueTypesWithIcon: TaskTypeWithIcon[] = [
      new TaskTypeWithIcon(TaskType.BUG),
      new TaskTypeWithIcon(TaskType.STORY),
      new TaskTypeWithIcon(TaskType.TASK)
    ];
}

export class TaskStatusValueTitle {
    value: TaskStatus;
    label: string;
    constructor(taskStatus: TaskStatus) {
      this.value = taskStatus;
      this.label = TaskStatusDisplay[taskStatus];
    }
}
