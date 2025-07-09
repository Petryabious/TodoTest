import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from '../../../../interfaces/task.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksItemComponent {
  public isShowDescription = false;

  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<string>();

  public showDescription(): void {
    this.isShowDescription = !this.isShowDescription;
  }

  public handlerDeleteTask(): void {
    this.deleteTask.emit(this.task.id);
  }
}
