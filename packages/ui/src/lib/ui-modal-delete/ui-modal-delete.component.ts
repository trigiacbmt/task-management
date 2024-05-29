import { ChangeDetectionStrategy, Component, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { DeleteIssueModel } from '@trigiacbmt/util';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'lib-ui-modal-delete',
  standalone: true,
  imports: [CommonModule, NzButtonModule, UiButtonComponent],
  templateUrl: './ui-modal-delete.component.html',
  styleUrl: './ui-modal-delete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalDeleteComponent {
  #modalRef = inject(NzModalRef)
  #data = inject(NZ_MODAL_DATA)
  issueId = '';

  onDelete = new EventEmitter<DeleteIssueModel>();

  constructor() {
    this.issueId = this.#data.issueId;
    this.onDelete = this.#data.onDelete;
  }


  deleteIssue() {
    this.onDelete.emit(new DeleteIssueModel(this.issueId, this.#modalRef));
  }

  closeModal() {
    this.#modalRef.close();
  }
}
