import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-svg-defination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-svg-defination.component.html',
  styleUrl: './ui-svg-defination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSvgDefinationComponent {}
