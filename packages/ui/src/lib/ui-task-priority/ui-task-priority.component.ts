import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';
import { ProjectConst, SafeAny, Task, TaskPriority, TaskPriorityIcon, TaskUtil } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';

@Component({
  selector: 'lib-ui-task-priority',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, NzDropDownModule, UiSvgIconComponent],
  templateUrl: './ui-task-priority.component.html',
  styleUrl: './ui-task-priority.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTaskPriorityComponent {
  #projectStore = inject(ProjectStore);
  task = input.required<Task>();

  selectedPriority?: TaskPriority;

  get selectedPriorityIcon() {
    return TaskUtil.getIssuePriorityIcon(this.selectedPriority as TaskPriority);
  }

  priorities: TaskPriorityIcon[] = ProjectConst.PrioritiesWithIcon;


  isPrioritySelected(priority: string) {
    return priority === this.selectedPriority;
  }

  updateIssue(priority: TaskPriority | SafeAny) {
    this.selectedPriority = priority;
    this.#projectStore.updateTask({
      ...this.task(),
      priority: this.selectedPriority as TaskPriority
    });
  }
}
