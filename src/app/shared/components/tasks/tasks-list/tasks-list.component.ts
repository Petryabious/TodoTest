import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { TaskService } from '../../../../services/task/task.service';
import { ModalDeleteTaskComponent } from '../../modals/modal-delete-task/modal-delete-task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TasksItemComponent, ModalDeleteTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  private taskService = inject(TaskService);

  public tasks = this.taskService.tasks;

  public displayDeleteModal = false;

  private deleteId = '';

  public showDeleteModal(id: string): void {
    this.displayDeleteModal = true;
    this.deleteId = id;
  }

  public deleteTask(): void {
    if (!this.deleteId) {
      return;
    }
    this.taskService.removeTask(this.deleteId);
  }
}
