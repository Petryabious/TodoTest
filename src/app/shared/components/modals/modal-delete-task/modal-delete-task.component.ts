import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ModalBaseDirective } from '../modal-base/modal-base.directive';
import { DialogDirective } from '../dialog/dialog.directive';

@Component({
  selector: 'app-modal-delete-task',
  standalone: true,
  imports: [DialogDirective],
  templateUrl: './modal-delete-task.component.html',
  styleUrls: [
    '.././modal-base/modal-base.scss',
    './modal-delete-task.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDeleteTaskComponent extends ModalBaseDirective {
  @Output() deleteTask = new EventEmitter<void>();

  public handlerDeleteTask(): void {
    this.deleteTask.emit();
    this.closeDialog();
  }
}
