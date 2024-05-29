import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTaskDetailComponent } from '@trigiacbmt/ui-lib';
import { DeleteIssueModel, Project, ProjectConst, SafeAny, Task } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, UiTaskDetailComponent],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailsComponent implements OnInit, OnDestroy{
  #projectStore = inject(ProjectStore);
  #route = inject(ActivatedRoute);
  #router = inject(Router);
  #cdr = inject(ChangeDetectorRef);
  destroy$ = new Subject<void>();
  project?: Project;
  taskById: Task | SafeAny;
  taskId?: string;
  get breadcrumbs(): SafeAny{
    return [ProjectConst.Projects, this.project?.name, 'Issues', this.taskId];
  }


  ngOnInit(): void {
    this.getIssue();
  }

  projectChange = effect(() => {
    const state = getState(this.#projectStore);
    this.taskById = this.#projectStore.loadTaskById(this.taskId as string);
    this.#cdr.detectChanges()
    console.log(this.taskById)
  })

  deleteIssue({issueId, deleteModalRef}: DeleteIssueModel) {
    this.#projectStore.removeTask(issueId);
    deleteModalRef.close();
    this.backHome();
  }

  private getIssue() {
    this.taskId = this.#route.snapshot.paramMap.get(ProjectConst.IssueId) as string;
    if (!this.taskId) {
      this.backHome();
      return;
    }
  }
    

  private backHome() {
    this.#router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
