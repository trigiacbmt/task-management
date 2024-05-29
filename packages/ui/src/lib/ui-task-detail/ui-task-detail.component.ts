import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalDeleteComponent } from '../ui-modal-delete/ui-modal-delete.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DeleteIssueModel, Task } from '@trigiacbmt/util';
import { UiTaskTypeComponent } from '../ui-task-type/ui-task-type.component';
import { UiTaskTitleComponent } from '../ui-task-title/ui-task-title.component';
import { UiTaskDescriptionComponent } from '../ui-task-description/ui-task-description.component';
import { UiTaskPriorityComponent } from '../ui-task-priority/ui-task-priority.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { UiStatusComponent } from '../ui-status/ui-status.component';
import { UiReporterComponent } from '../ui-reporter/ui-reporter.component';
import { ProjectStore } from '@trigiacbmt/data-access';
import { UiAssigneesComponent } from '../ui-assignees/ui-assignees.component';
import { UiLoaderComponent } from '../ui-loader/ui-loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-ui-task-detail',
  standalone: true,
  imports: [CommonModule, UiModalDeleteComponent, UiLoaderComponent ,UiAssigneesComponent ,UiTaskTypeComponent, UiTaskTitleComponent, UiTaskDescriptionComponent, UiTaskPriorityComponent, UiButtonComponent, UiStatusComponent, UiReporterComponent],
  templateUrl: './ui-task-detail.component.html',
  styleUrl: './ui-task-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NzModalService]
})
export class UiTaskDetailComponent {
  #modalService = inject(NzModalService)
  #projectStore = inject(ProjectStore)
  #router = inject(Router)
  task = input.required<Task>()
  isShowFullScreenButton = input<boolean>()
  isShowCloseButton = input<boolean>()
  onClosed = output()
  onOpenIssue = output<string>()
  onDelete = output<DeleteIssueModel>()

  users = computed(() => {
    return this.#projectStore.users()
  })

  openDeleteIssueModal() {
    this.#modalService.create({
      nzContent: UiModalDeleteComponent,
      nzClosable: false,
      nzFooter: null,
      nzStyle: {
        top: '140px'
      },
      nzData: {
        issueId: this.task().id,
        onDelete: this.onDelete
      }
    });
  }

  closeModal() {
    this.onClosed.emit();
  }

  openIssuePage() {
    this.onOpenIssue.emit(this.task().id);
  }

  goBack() {
    this.#router.navigate(["/"])
  }
}
