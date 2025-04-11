import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () =>
      import('@devhub-workspace/about').then((m) => m.AboutComponent),
  },
  {
    path: 'resume',
    pathMatch: 'full',
    loadComponent: () =>
      import('@devhub-workspace/resume').then((m) => m.ResumeComponent),
  },
  {
    path: 'projects',
    pathMatch: 'full',
    loadComponent: () =>
      import('@devhub-workspace/projects').then((m) => m.ProjectsComponent),
  },
  {
    path: 'blog',
    pathMatch: 'full',
    loadComponent: () =>
      import('@devhub-workspace/blog').then((m) => m.BlogComponent),
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () =>
      import('@devhub-workspace/contact').then((m) => m.ContactComponent),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
