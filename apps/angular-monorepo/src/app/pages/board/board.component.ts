import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStore } from '@trigiacbmt/data-access';
import { UiBoardComponent, UiBoardFilterComponent } from '@trigiacbmt/ui-lib';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, UiBoardFilterComponent, UiBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  
}
