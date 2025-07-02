import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () =>
      import('./layouts/layout.route').then((mod) => mod.PAGE_ROUTES),
  },
];
