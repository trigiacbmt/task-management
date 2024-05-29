import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProjectStore } from '@trigiacbmt/data-access';
import { Task } from '@trigiacbmt/util';
import {TextFieldModule} from '@angular/cdk/text-field';

@Component({
  selector: 'lib-ui-task-title',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzInputModule, TextFieldModule],
  templateUrl: './ui-task-title.component.html',
  styleUrl: './ui-task-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTaskTitleComponent {
  #projectStore = inject(ProjectStore);
  task = input.required<Task>();
  titleControl: FormControl = new FormControl();

  titleChange = effect(() => {
    this.titleControl.setValue(this.task().title);
  })

  onBlur() {
    this.#projectStore.updateTask({
      ...this.task(),
      title: this.titleControl.value
    });
  }
}
