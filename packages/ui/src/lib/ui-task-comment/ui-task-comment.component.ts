import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAvatarComponent } from '../ui-avatar/ui-avatar.component';

@Component({
  selector: 'lib-ui-task-comment',
  standalone: true,
  imports: [CommonModule, UiAvatarComponent],
  templateUrl: './ui-task-comment.component.html',
  styleUrl: './ui-task-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTaskCommentComponent {
  
}
