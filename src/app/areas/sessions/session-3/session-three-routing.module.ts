import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from '../../public/public.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: PublicRoutes.oneWayBindRoute.path,
    pathMatch: 'full',
  },
  {
    path: PublicRoutes.oneWayBindRoute.path,
    title: PublicRoutes.oneWayBindRoute.title,
    loadComponent: () =>
      import('./data-binding/data-binding.component').then(
        (m) => m.DataBindingComponent
      ),
  },
  {
    path: PublicRoutes.twoWayBindRoute.path,
    title: PublicRoutes.twoWayBindRoute.title,
    loadComponent: () =>
      import('./two-way-binding/two-way-binding.component').then(
        (m) => m.TwoWayBindingComponent
      ),
  },
  {
    path: PublicRoutes.courseCardRoute.path,
    title: PublicRoutes.courseCardRoute.title,
    loadComponent: () =>
      import('./inputs/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionThreeRoutingModule {}
