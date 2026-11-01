import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStore } from '@trigiacbmt/data-access';
import { UiBoardComponent, UiBoardFilterComponent, UiBreadcrumbComponent } from '@trigiacbmt/ui-lib';
import { ProjectConst } from '@trigiacbmt/util';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, UiBoardFilterComponent, UiBoardComponent, UiBreadcrumbComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  readonly breadcrumbs = [
    { title: ProjectConst.Projects, link: '/' },
    { title: 'Board', link: '/board' },
  ];
}
