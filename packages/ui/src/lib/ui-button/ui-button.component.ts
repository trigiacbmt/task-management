import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSvgIconComponent } from '../ui-svg-icon/ui-svg-icon.component';

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [CommonModule, UiSvgIconComponent],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent {
  type = input<string>('button');
  className = input<string>('btn-primary');
  icon = input<string>();
  iconSize = input<number>(18);
  isWorking = input<boolean>();
  isActive = input<boolean>();
  disabled = input<boolean>();
}
