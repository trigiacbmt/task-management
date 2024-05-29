import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUserComponent } from '../ui-user/ui-user.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Task, User } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';

@Component({
  selector: 'lib-ui-assignees',
  standalone: true,
  imports: [CommonModule, UiUserComponent, NzDropDownModule, NzIconModule, UiButtonComponent, UiSvgIconComponent],
  templateUrl: './ui-assignees.component.html',
  styleUrl: './ui-assignees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [ProjectStore]
})
export class UiAssigneesComponent {
  #store = inject(ProjectStore)
  users = input.required<User[]>();
  task = input.required<Task>();
  assignees = computed(() => {
    return this.task().userIds.map((userId) => this.users().find((x) => x.id === userId))
  })

  removeUser(userId?: string) {
    const newUserIds = this.task().userIds.filter((x) => x !== userId);
    this.#store.updateTask({...this.task(), userIds: newUserIds});
  }

  addUserToIssue(user: User) {
    this.#store.updateTask({...this.task(), userIds: [...this.task().userIds, user.id]});
  }

  isUserSelected(user: User): boolean {
    return this.task().userIds.includes(user.id);
  }
}
