import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'testimonials',
    pathMatch: 'full',
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      import('./testimonials/testimonials.module').then(
        (m) => m.TestimonialsModule,
      ),
  },
];
