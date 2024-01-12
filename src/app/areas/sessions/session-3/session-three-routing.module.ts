import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from '../../public/public.routes';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CoursesComponent } from './inputs/courses/courses.component';

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
  exports: [RouterModule]
})
export class SessionThreeRoutingModule { }
