import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),

        children: [
            {
                path: 'change-detection',
                title: 'ChangeDetection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'ControlFlow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'DeferOptions',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'DeferViews',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'view-transition',
                title: 'ViewTransition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
            },
            {
                path: 'user/:id',
                title: 'UserView',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'user-list',
                title: 'UserList',
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
