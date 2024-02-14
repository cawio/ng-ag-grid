import { Routes } from '@angular/router';
import { ExampleGridComponent } from './features/example-grid/example-grid.component';
import { RamenRatingsComponent } from './features/ramen-ratings/ramen-ratings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full',
  },
  {
    path: 'example',
    component: ExampleGridComponent,
  },
  {
    path: 'ramen',
    component: RamenRatingsComponent,
  }
];
