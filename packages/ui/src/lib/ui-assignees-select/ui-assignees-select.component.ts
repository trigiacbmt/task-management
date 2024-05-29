import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UiUserComponent } from '../ui-user/ui-user.component';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeAny, User } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-assignees-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule, UiUserComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './ui-assignees-select.component.html',
  styleUrl: './ui-assignees-select.component.scss',
})
export class UiAssigneesSelectComponent {
  control = input.required<SafeAny>()
  users = input<User[]>()

  getUser(userId: string): SafeAny {
    return this.users()?.find((user) => user.id === userId);
  }
}
