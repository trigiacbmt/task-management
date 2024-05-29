import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeAny } from '@trigiacbmt/util';

@Component({
  selector: 'lib-ui-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-svg-icon.component.html',
  styleUrl: './ui-svg-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSvgIconComponent {
  name = input<string>();
  size = input<number>(16);
  fill = input<string>('currentColor');
  window: SafeAny = window;

  iconUrl = computed(() => {
    return `${this.window.location.href}#${this.name()}`;
  })

  
}
