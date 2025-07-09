import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task/task.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Task } from 'zone.js/lib/zone-impl';
import { TaskStatusPipe } from '../../shared/pipes/taskStatus/task-status.pipe';
import { ModalChangeStatusComponent } from '../../shared/components/modals/modal-change-status/modal-change-status.component';
import { taskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink, TaskStatusPipe, ModalChangeStatusComponent],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  private taskId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id')))
  );

  public task = computed(() => {
    const id = this.taskId();
    return this.taskService.getTask(id ?? '');
  });

  public displayChangeStatusModal = false;

  public showChangeStatusModal(): void {
    this.displayChangeStatusModal = true;
  }

  public changeStatus(newStatus: string): void {
    this.taskService.updateStatusTask(
      this.task()?.id ?? '',
      newStatus as taskStatus
    );
  }
}
