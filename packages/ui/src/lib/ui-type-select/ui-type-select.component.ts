import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';
import { ProjectConst, SafeAny, TaskType, TaskTypeWithIcon, TaskUtil } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-type-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule, ReactiveFormsModule, FormsModule, UiSvgIconComponent],
  templateUrl: './ui-type-select.component.html',
  styleUrl: './ui-type-select.component.scss',
})
export class UiTypeSelectComponent {
  control = input.required<SafeAny>()

  issueTypes: TaskTypeWithIcon[];

  constructor() {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  getIssueTypeIcon(issueType: TaskType) {
    return TaskUtil.getIssueTypeIcon(issueType);
  }
}
