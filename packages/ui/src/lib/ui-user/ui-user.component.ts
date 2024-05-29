import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAvatarComponent } from '../ui-avatar/ui-avatar.component';
import { User } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-user',
  standalone: true,
  imports: [CommonModule, UiAvatarComponent],
  templateUrl: './ui-user.component.html',
  styleUrl: './ui-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiUserComponent {
  user = input<User>()
}
