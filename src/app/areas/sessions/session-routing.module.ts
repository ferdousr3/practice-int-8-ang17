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
import { FormsTypesComponent } from './session-5/forms-types/forms-types.component';
import { ReactiveFormsComponent } from './session-5/reactive-forms/reactive-forms.component';
import { SingleFormComponent } from './session-5/single-form/single-form.component';
import { ObservableConceptComponent } from './session-6/observable-concept/observable-concept.component';
import { ObservableComponent } from './session-6/observable/observable.component';
import { PipeDetailsComponent } from './session-6/pipe-details/pipe-details.component';
import { PipesComponent } from './session-6/pipes/pipes.component';

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
  {
    path: 'reactive-forms',
    title: 'Reactive forms',
    component: ReactiveFormsComponent,
  },
  {
    path: 'forms-types',
    title: 'Forms Types',
    component: FormsTypesComponent,
  },
  {
    path: 'single-form',
    title: 'Single Form',
    component: SingleFormComponent,
  },
  {
    path: 'pipe-details',
    title: 'Pipes Details',
    component: PipeDetailsComponent,
  },
  {
    path: 'pipes',
    title: 'Pipes',
    component: PipesComponent,
  },
  {
    path: 'observable-concept',
    title: 'observable concept',
    component: ObservableConceptComponent,
  },
  {
    path: 'observable',
    title: 'observable',
    component: ObservableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
