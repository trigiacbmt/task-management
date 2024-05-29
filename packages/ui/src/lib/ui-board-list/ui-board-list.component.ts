import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterState, Task, TaskStatus, TaskStatusDisplay, TaskUtil } from '@trigiacbmt/util';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FilterStore, ProjectStore } from '@trigiacbmt/data-access';
import * as dateFns from 'date-fns';
import { getState } from '@ngrx/signals';
import { UiCardComponent } from '../ui-card/ui-card.component';

@Component({
  selector: '[lib-ui-board-list]',
  standalone: true,
  imports: [CommonModule, DragDropModule, UiCardComponent],
  templateUrl: './ui-board-list.component.html',
  styleUrl: './ui-board-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBoardListComponent {
  #projectStore = inject(ProjectStore);
  #filterStore = inject(FilterStore);
  #cdr = inject(ChangeDetectorRef);
  status = input.required<TaskStatus>()
  currentUserId = input.required<string>()
  issues = input.required<Task[]>()
  IssueStatusDisplay = TaskStatusDisplay;

  currentIssues: Task[] = [];

  issuesCount = 0;

  filterChange = effect(() => {
    this.currentIssues = this.issues().filter((issue) => issue.status === this.status()).sort((a, b) => a.listPosition - b.listPosition);
    const filter = getState(this.#filterStore)
    console.log('Filter change', filter)
    this.currentIssues = this.filterIssues(this.currentIssues, filter)
    this.issuesCount = this.currentIssues.length
    this.#cdr.detectChanges()
  })

  drop(event: CdkDragDrop<Task[]>) {
    
    if (event.previousContainer === event.container) {
      const newIssues = [...event.container.data];
      moveItemInArray(newIssues, event.previousIndex, event.currentIndex);
      this.updateListPosition(newIssues);
    } else {
      const newIssue: Task = { ...event.item.data };
      const newIssues = [...event.container.data];
      
      transferArrayItem(
        event.previousContainer.data,
        newIssues,
        event.previousIndex,
        event.currentIndex
      );

      newIssues.forEach((issue, idx) => {
        if(issue.id === newIssue.id) {
          issue.status = event.container.id as TaskStatus;
        }
      })
      
      this.updateListPosition(newIssues);
      
      // this.#projectStore.updateTask(newIssue);
    }
  }

  filterIssues(issues: Task[], filter: FilterState): Task[] {
    const { onlyMyIssue, ignoreResolved, searchTerm, userIds } = filter;
    return issues.filter((issue) => {
      const isMatchTerm = searchTerm ? TaskUtil.searchString(issue.title, searchTerm) : true;

      const isIncludeUsers = userIds.length
        ? issue.userIds.some((userId) => userIds.includes(userId))
        : true;

      const isMyIssue = onlyMyIssue
        ? this.currentUserId && issue.userIds.includes(this.currentUserId())
        : true;

      const isIgnoreResolved = ignoreResolved ? issue.status !== TaskStatus.DONE : true;

      return isMatchTerm && isIncludeUsers && isMyIssue && isIgnoreResolved;
    });
  }

  isDateWithinThreeDaysFromNow(date: string) {
    const now = new Date();
    const inputDate = new Date(date);
    return dateFns.isAfter(inputDate, dateFns.subDays(now, 3));
  }

  private updateListPosition(newList: Task[]) {
    newList.forEach((issue, idx) => {
      const newIssueWithNewPosition = { ...issue, listPosition: idx + 1 };
      this.#projectStore.updateTask(newIssueWithNewPosition);
    });
  }
}
