import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'lib-ui-loader',
  standalone: true,
  imports: [CommonModule, NzSkeletonModule],
  templateUrl: './ui-loader.component.html',
  styleUrl: './ui-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoaderComponent {}
