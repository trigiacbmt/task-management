import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Task, TaskStatus, TaskStatusDisplay, TaskStatusValueTitle } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';

@Component({
  selector: 'lib-ui-status',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, NzDropDownModule],
  templateUrl: './ui-status.component.html',
  styleUrl: './ui-status.component.scss',
})
export class UiStatusComponent {
  #projectStore = inject(ProjectStore);
  task = input.required<Task>();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TaskStatusDisplay = TaskStatusDisplay;


  variants = {
    [TaskStatus.BACKLOG]: 'btn-secondary',
    [TaskStatus.IN_PROGRESS]: 'btn-primary',
    [TaskStatus.DONE]: 'btn-success'
  };

  taskStatuses: TaskStatusValueTitle[] = [
    new TaskStatusValueTitle(TaskStatus.BACKLOG),
    new TaskStatusValueTitle(TaskStatus.IN_PROGRESS),
    new TaskStatusValueTitle(TaskStatus.DONE)
  ];;


  updateIssue(status: TaskStatus) {
    const newPosition = this.#projectStore.lastTaskPosition(status);
    this.#projectStore.updateTask({
      ...this.task(),
      status,
      listPosition: newPosition + 1
    });
  }

  isStatusSelected(status: TaskStatus) {
    return this.task().status === status;
  }
}
