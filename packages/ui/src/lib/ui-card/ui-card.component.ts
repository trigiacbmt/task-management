import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAvatarComponent } from '../ui-avatar/ui-avatar.component';
import { Task, TaskPriorityIcon, TaskUtil, User } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';
import { getState } from '@ngrx/signals';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-ui-card',
  standalone: true,
  imports: [CommonModule, UiAvatarComponent, NzToolTipModule, UiSvgIconComponent],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent {
  #cdr = inject(ChangeDetectorRef);
  #projectStore = inject(ProjectStore);
  #router = inject(Router);
  issue = input.required<Task>();
  assignees: User[] = [];
  issueTypeIcon?: string;
  priorityIcon?: TaskPriorityIcon;


  usersChange = effect(() => {
    const state = getState(this.#projectStore);
    this.assignees = this.issue().userIds.map((userId) => state.users.find((x) => x.id === userId)) as User[];
    this.#cdr.detectChanges();
  })

  issueChange = effect(() => {
    this.issueTypeIcon = TaskUtil.getIssueTypeIcon(this.issue().type);
    this.priorityIcon = TaskUtil.getIssuePriorityIcon(this.issue().priority);
    this.#cdr.detectChanges();
  })

  openIssueModal(issueId: string) {
    console.log(issueId)
    this.#router.navigate(['task', issueId]);
    // this._modalService.create({
    //   nzContent: IssueModalComponent,
    //   nzWidth: 1040,
    //   nzClosable: false,
    //   nzFooter: null,
    //   nzComponentParams: {
    //     issue$: this._projectQuery.issueById$(issueId)
    //   }
    // });
  }
}
