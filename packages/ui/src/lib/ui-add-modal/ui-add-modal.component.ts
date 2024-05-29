import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { UiTypeSelectComponent } from '../ui-type-select/ui-type-select.component';
import { UiPrioritySelectComponent } from '../ui-priority-select/ui-priority-select.component';
import { UiReporterSelectComponent } from '../ui-reporter-select/ui-reporter-select.component';
import { UiAssigneesSelectComponent } from '../ui-assignees-select/ui-assignees-select.component';
import { QuillEditorComponent } from 'ngx-quill';
import { DateUtil, NoWhitespaceValidator, Task, TaskPriority, TaskStatus, TaskType, TaskUtil, User, quillConfiguration } from '@trigiacbmt/util';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectStore } from '@trigiacbmt/data-access';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'lib-ui-add-modal',
  standalone: true,
  imports: [CommonModule, NzInputModule ,UiButtonComponent, UiTypeSelectComponent, UiPrioritySelectComponent, UiReporterSelectComponent, UiAssigneesSelectComponent, QuillEditorComponent, ReactiveFormsModule],
  templateUrl: './ui-add-modal.component.html',
  styleUrl: './ui-add-modal.component.scss',
})
export class UiAddModalComponent {
  #fb = inject(FormBuilder)
  #modalRef = inject(NzModalRef)
  #projectStore = inject(ProjectStore)
  issueForm: FormGroup = this.#fb.group({
    type: [TaskType.TASK],
    priority: [TaskPriority.MEDIUM],
    title: ['', NoWhitespaceValidator()],
    description: [''],
    reporterId: [''],
    userIds: [[]]
  });
  editorOptions = quillConfiguration;

  get f() {
    return this.issueForm.controls;
  }

  get formControlType() {
    return this.issueForm.get("type")
  }

  get formControlPriority() {
    return this.issueForm.get("priority")
  }

  get formControlTitle() {
    return this.issueForm.get("title")
  }

  get formControlDescription() {
    return this.issueForm.get("description")
  }

  get formControlReporter() {
    return this.issueForm.get("reporterId")
  }

  get formControlUserIds() {
    return this.issueForm.get("userIds")
  }

  users = computed(() => {
    return this.#projectStore.users()
  })

  assigness = computed(() => {
    return this.#projectStore.users()
  })

  setReportId = effect(() => {
    const users = this.#projectStore.users()
    this.formControlReporter?.patchValue(users[0].id)
  })

  initForm() {
    this.issueForm = this.#fb.group({
      type: [TaskType.TASK],
      priority: [TaskPriority.MEDIUM],
      title: ['', NoWhitespaceValidator()],
      description: [''],
      reporterId: [''],
      userIds: [[]]
    });
  }

  submitForm() {
    if (this.issueForm?.invalid) {
      return;
    }
    const now = DateUtil.getNow();
    const issue: Task = {
      ...this.issueForm?.getRawValue(),
      id: TaskUtil.getRandomId(),
      status: TaskStatus.BACKLOG,
      createdAt: now,
      updatedAt: now
    };

    this.#projectStore.updateTask(issue);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this.#modalRef.close();
  }
}
