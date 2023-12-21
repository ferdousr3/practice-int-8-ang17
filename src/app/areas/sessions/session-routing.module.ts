import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from '../public/public.routes';
import { DataBindingComponent } from './session-3/data-binding/data-binding.component';
import { CoursesComponent } from './session-3/inputs/courses/courses.component';
import { TwoWayBindingComponent } from './session-3/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: PublicRoutes.oneWayBindRoute.path,
    pathMatch: 'full',
  },
  {
    path: PublicRoutes.oneWayBindRoute.path,
    title: PublicRoutes.oneWayBindRoute.title,
    component: DataBindingComponent,
  },
  {
    path: PublicRoutes.twoWayBindRoute.path,
    title: PublicRoutes.twoWayBindRoute.title,
    component: TwoWayBindingComponent,
  },
  {
    path: PublicRoutes.courseCardRoute.path,
    title: PublicRoutes.courseCardRoute.title,
    component: CoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
