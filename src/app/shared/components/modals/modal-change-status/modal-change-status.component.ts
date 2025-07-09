import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ModalBaseDirective } from '../modal-base/modal-base.directive';
import { DialogDirective } from '../dialog/dialog.directive';
import { taskStatus } from '../../../../enums/task-status.enum';
import { TaskStatusPipe } from '../../../pipes/taskStatus/task-status.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-change-status',
  standalone: true,
  imports: [DialogDirective, TaskStatusPipe, FormsModule],
  templateUrl: './modal-change-status.component.html',
  styleUrls: [
    '.././modal-base/modal-base.scss',
    './modal-change-status.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalChangeStatusComponent extends ModalBaseDirective {
  @Input() selectedStatus = '';
  @Output() changeStatus = new EventEmitter<string>();

  public statusValues = Object.values(taskStatus);

  public setSelectedStatus(): void {
    this.changeStatus.emit(this.selectedStatus);
    this.closeDialog();
  }
}
