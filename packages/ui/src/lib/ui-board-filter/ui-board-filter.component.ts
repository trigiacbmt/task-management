import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiAvatarComponent } from '../ui-avatar/ui-avatar.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FilterStore, ProjectStore } from '@trigiacbmt/data-access';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SafeAny, User } from '@trigiacbmt/util';
import { getState } from '@ngrx/signals';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UiAddModalComponent } from '../ui-add-modal/ui-add-modal.component';

@Component({
  selector: 'lib-ui-board-filter',
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, ReactiveFormsModule, UiAvatarComponent, NzToolTipModule, NzButtonModule, UiButtonComponent],
  templateUrl: './ui-board-filter.component.html',
  styleUrl: './ui-board-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NzModalService]
})
export class UiBoardFilterComponent implements OnInit, OnDestroy {
  #store = inject(ProjectStore);
  #filterStore = inject(FilterStore)
  #modalService = inject(NzModalService)
  searchControl: FormControl = new FormControl<string>('');
  userIds: string[] = []
  destroy$: Subject<void> = new Subject<void>();


  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(100), distinctUntilChanged(), takeUntil(this.destroy$))
    .subscribe((term: SafeAny) => {
      this.#filterStore.updateSearchTerm(term);
    });
  }


  userChange = effect(() => {
    const state = getState(this.#filterStore)
    this.userIds = state.userIds
  })

  users = computed(() => {
    return this.#store.users();
  })

  checkActiveOnlyMyIssue = computed(() => {
    return this.#filterStore.getOnlyMyIssue();
  })

  checkActiveIgnoreResolved = computed(() => {
    return this.#filterStore.getIgnoreResolved();
  })

  checkActiveReset = computed(() => {
    return this.#filterStore.getAllStatuses();
  })

  inputValue?: string = '';

  userChanged(user: SafeAny) {
    this.#filterStore.toggleUserId(user.id)
  }

  isUserSelected(user: User) {
    return this.userIds.includes(user.id);
  }

  ignoreResolvedChanged() {
    this.#filterStore.toggleIgnoreResolved();
  }

  onlyMyIssueChanged() {
    this.#filterStore.toggleOnlyMyIssue();
  }

  resetAll() {
    this.searchControl.setValue('');
    this.#filterStore.resetAll();
  }

  openCreateModal() {
    this.#modalService.create({
      nzContent: UiAddModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete()
  }
}

