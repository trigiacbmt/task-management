import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiUserComponent } from '../ui-user/ui-user.component';
import { SafeAny, User } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-reporter-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule, FormsModule, ReactiveFormsModule, UiUserComponent],
  templateUrl: './ui-reporter-select.component.html',
  styleUrl: './ui-reporter-select.component.scss',
})
export class UiReporterSelectComponent {
  control = input.required<SafeAny>()
  users = input.required<User[]>()

  getUser(userId: string) {
    return this.users()?.find((user) => user.id === userId);
  }
}
