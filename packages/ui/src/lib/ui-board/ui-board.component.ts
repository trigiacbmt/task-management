import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '@trigiacbmt/util';
import { AuthStore, ProjectStore } from '@trigiacbmt/data-access';
import { UiBoardListComponent } from '../ui-board-list/ui-board-list.component';
import { getState } from '@ngrx/signals';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-ui-board',
  standalone: true,
  imports: [CommonModule, UiBoardListComponent, DragDropModule],
  templateUrl: './ui-board.component.html',
  styleUrl: './ui-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBoardComponent {
  #projectStore = inject(ProjectStore);
  #authStore = inject(AuthStore);
  taskStatuses: TaskStatus[] = [
    TaskStatus.BACKLOG,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ];

  currentUserId = computed(() => {
    const currentUser = getState(this.#authStore);
    return currentUser?.id;
  })

  issues = computed(() => {
    const currentTask = getState(this.#projectStore);
    return currentTask.tasks;
  })
}
