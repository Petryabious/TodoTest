import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { TasksListComponent } from '../../shared/components/tasks/tasks-list/tasks-list.component';
import { ModalAddTaskComponent } from '../../shared/components/modals/modal-add-task/modal-add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavComponent, TasksListComponent, ModalAddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  public displayAddModal = false;

  public showAddModal(): void {
    this.displayAddModal = true;
  }
}
