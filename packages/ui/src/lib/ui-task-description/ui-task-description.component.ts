import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillEditorComponent } from 'ngx-quill';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeAny, Task, quillConfiguration } from '@trigiacbmt/util';
import { ProjectStore } from '@trigiacbmt/data-access';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'lib-ui-task-description',
  standalone: true,
  imports: [CommonModule, QuillEditorComponent, FormsModule, ReactiveFormsModule, UiButtonComponent],
  templateUrl: './ui-task-description.component.html',
  styleUrl: './ui-task-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [ProjectStore],
})
export class UiTaskDescriptionComponent {
  task = input.required<Task>()
  #store = inject(ProjectStore);
  descriptionControl: FormControl = new FormControl();
  editorOptions = quillConfiguration;
  isEditing?: boolean;
  isWorking?: boolean;

  constructor() {
    effect(() => {
      this.descriptionControl.setValue(this.task().description);
    })
  }

  setEditMode(mode: boolean) {
    this.isEditing = mode;
  }

  editorCreated(editor: SafeAny) {
    if (editor && editor.focus) {
      editor.focus();
    }
  }

  save() {;
    this.#store.updateTask({
      ...this.task(),
      description: this.descriptionControl.value
    });
    this.setEditMode(false);
  }

  cancel() {
    this.descriptionControl.patchValue(this.task().description);
    this.setEditMode(false);
  }
}
