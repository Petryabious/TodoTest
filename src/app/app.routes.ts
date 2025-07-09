import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'tasks',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/tasks/tasks.component').then((m) => m.TasksComponent),
  },
  {
    path: 'tasks/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/task-detail/task-detail.component').then(
        (m) => m.TaskDetailComponent
      ),
  },
];
