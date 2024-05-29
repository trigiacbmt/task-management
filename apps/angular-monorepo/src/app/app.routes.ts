import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'board',
        pathMatch: 'full'
    },
    {
        path: 'board',
        loadComponent: () => import('./pages/board/board.component').then(m => m.BoardComponent)
    },
    {
        path: 'task/:taskId',
        loadComponent: () => import('./pages/task-details/task-details.component').then(m => m.TaskDetailsComponent)
    }
];
