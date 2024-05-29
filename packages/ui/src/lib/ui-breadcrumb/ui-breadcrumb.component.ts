import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-ui-breadcrumb',
  standalone: true,
  imports: [CommonModule, NzBreadCrumbModule, RouterLink],
  templateUrl: './ui-breadcrumb.component.html',
  styleUrl: './ui-breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumbComponent {
  items = input([{
    title: 'Home',
    link: '/'
  }]);
}
