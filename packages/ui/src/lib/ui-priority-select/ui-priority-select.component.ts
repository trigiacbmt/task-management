import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectConst, SafeAny, TaskPriority, TaskPriorityIcon, TaskUtil } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-priority-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule, UiSvgIconComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './ui-priority-select.component.html',
  styleUrl: './ui-priority-select.component.scss',
})
export class UiPrioritySelectComponent {
  control = input.required<SafeAny>()

  priorities: TaskPriorityIcon[];

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  getPriorityIcon(priority: TaskPriority) {
    return TaskUtil.getIssuePriorityIcon(priority);
  }
}
