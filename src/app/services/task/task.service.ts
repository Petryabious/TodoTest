import { Injectable, signal } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { taskStatus } from '../../enums/task-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<Task[]>([]);

  public tasks = this._tasks.asReadonly();

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  public addTask(task: Partial<Task>): void {
    const newTask: Task = {
      title: task.title ?? '',
      description: task.description ?? '',
      status: taskStatus.NOT_STARTED,
      id: this.generateId(),
    };

    this._tasks.update((value) => [...value, newTask]);
  }

  public removeTask(id: string): void {
    this._tasks.update((value) => value.filter((task) => task.id !== id));
  }

  public getTask(id: string): Task | null {
    const currentTask = this._tasks().find((task) => task.id === id);

    if (!currentTask) {
      return null;
    }
    return currentTask;
  }

  public updateStatusTask(id: string, newStatus: taskStatus): void {
    this._tasks.update((value) => {
      return value.map((task) => {
        if (task.id == id) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });
  }
}
