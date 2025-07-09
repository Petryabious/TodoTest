import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalBaseDirective } from '../modal-base/modal-base.directive';
import { DialogDirective } from '../dialog/dialog.directive';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../../services/task/task.service';
import { Task } from '../../../../interfaces/task.interface';

@Component({
  selector: 'app-modal-add-task',
  standalone: true,
  imports: [DialogDirective, ReactiveFormsModule],
  templateUrl: './modal-add-task.component.html',
  styleUrls: [
    '.././modal-base/modal-base.scss',
    './modal-add-task.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddTaskComponent extends ModalBaseDirective {
  private taskService = inject(TaskService);

  public formAddTask = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  public submitForm(): void {
    if (!this.formAddTask.valid) {
      return;
    }

    const taskForm: Partial<Task> = {
      title: this.formAddTask.getRawValue().title ?? '',
      description: this.formAddTask.getRawValue().description ?? '',
    };

    this.taskService.addTask(taskForm);
    this.closeDialog();
    this.formAddTask.reset();
  }
}
