import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UiUserComponent } from '../ui-user/ui-user.component';
import { ProjectStore } from '@trigiacbmt/data-access';
import { Task, User } from '@trigiacbmt/util';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'lib-ui-reporter',
  standalone: true,
  imports: [CommonModule, NzDropDownModule, UiUserComponent, UiButtonComponent],
  templateUrl: './ui-reporter.component.html',
  styleUrl: './ui-reporter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [ProjectStore]
})
export class UiReporterComponent {
  #store = inject(ProjectStore);
  task = input.required<Task>();
  users = input.required<User[]>();
  reporter = computed<User | undefined>(() => {
    return this.users().find((x) => x.id === this.task().reporterId);
  })

  isUserSelected(user: User) {
    return user.id === this.task().reporterId;
  }

  updateIssue(user: User) {
    this.#store.updateTask({
      ...this.task(),
      reporterId: user.id
    })
  }
}
