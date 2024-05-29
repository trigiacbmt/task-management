import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-avatar.component.html',
  styleUrl: './ui-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAvatarComponent {
  avatarUrl = input<string>();
  avatarSize = input<number>();
  avatarName = input<string>();
  avatarRounded = input<boolean>(true);
  className = input<string>();

  style = computed(() => {
    return {
      'width': `${this.avatarSize()}px`,
      'height': `${this.avatarSize()}px`,
      'border-radius': this.avatarRounded() ? '50%' : '0',
      'background-image': `url('${this.avatarUrl()}')`,
    }
  })
}
