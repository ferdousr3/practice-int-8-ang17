import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from '../public/public.routes';
import { DataBindingComponent } from './session-3/data-binding/data-binding.component';
import { CoursesComponent } from './session-3/inputs/courses/courses.component';
import { TwoWayBindingComponent } from './session-3/two-way-binding/two-way-binding.component';
import { AllServicesComponent } from './session-4/all-services/all-services.component';
import { TemplateRefVaComponent } from './session-4/template-ref-va/template-ref-va.component';
import { UseCssComponent } from './session-4/use-css/use-css.component';
import { ViewChildConComponent } from './session-4/view-child-con/view-child-con.component';

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
  {
    path: 'template-ref-va',
    title: 'Template reference variable',
    component: TemplateRefVaComponent,
  },
  {
    path: 'view-child-children',
    title: 'view child & children',
    component: ViewChildConComponent,
  },
  {
    path: 'all-services',
    title: 'Services',
    component: AllServicesComponent,
  },
  {
    path: 'css',
    title: 'css',
    component: UseCssComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
