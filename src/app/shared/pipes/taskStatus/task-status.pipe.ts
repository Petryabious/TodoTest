import { Pipe, PipeTransform } from '@angular/core';
import { taskStatus } from '../../../enums/task-status.enum';

@Pipe({
  name: 'taskStatus',
  standalone: true,
})
export class TaskStatusPipe implements PipeTransform {
  transform(status: taskStatus | undefined): string {
    const statusMap: Record<taskStatus, string> = {
      [taskStatus.NOT_STARTED]: 'Не выполнен',
      [taskStatus.IN_PROGRESS]: 'В процессе',
      [taskStatus.DONE]: 'Выполнен',
    };

    if (!status) {
      return '';
    }

    return statusMap[status];
  }
}
