import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from './public.routes';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { DataBindingComponent } from './views/session-3/data-binding/data-binding.component';
import { CoursesComponent } from './views/session-3/inputs/courses/courses.component';
import { TwoWayBindingComponent } from './views/session-3/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: PublicRoutes.homeRoute.path,
    title: PublicRoutes.homeRoute.title,
    component: HomeComponent,
  },
  {
    path: PublicRoutes.contactRoute.path,
    title: PublicRoutes.contactRoute.title,
    component: ContactComponent,
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
export class PublicRoutingModule {}
