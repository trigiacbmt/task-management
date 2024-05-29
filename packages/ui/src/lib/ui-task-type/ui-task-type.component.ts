import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ProjectConst, Task, TaskType, TaskTypeWithIcon, TaskUtil } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';

@Component({
  selector: 'lib-ui-task-type',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, NzDropDownModule, UiSvgIconComponent],
  templateUrl: './ui-task-type.component.html',
  styleUrl: './ui-task-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTaskTypeComponent {
  #projectStore = inject(ProjectStore);
  task = input.required<Task>()

  selectedTaskTypeIcon = computed(() => {
    console.log('task', this.task());
    return TaskUtil.getIssueTypeIcon(this.task().type);
  
  })

  taskTypes?: TaskTypeWithIcon[];

  constructor() {
    this.taskTypes = ProjectConst.IssueTypesWithIcon;
  }

  updateTask(issueType: TaskType | string) {
    this.#projectStore.updateTask({
      ...this.task(),
      type: (issueType as TaskType)
    });
  }

  isTypeSelected(type: string) {
    return this.task().type === type;
  }
}
