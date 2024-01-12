import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTypesComponent } from './session-5/forms-types/forms-types.component';
import { ReactiveFormsComponent } from './session-5/reactive-forms/reactive-forms.component';
import { SingleFormComponent } from './session-5/single-form/single-form.component';
import { ObservableConceptComponent } from './session-6/observable-concept/observable-concept.component';
import { ObservableComponent } from './session-6/observable/observable.component';
import { ObvsFilterMapComponent } from './session-6/operators/obvs-filter-map/obvs-filter-map.component';
import { ObvsOfFromComponent } from './session-6/operators/obvs-of-from/obvs-of-from.component';
import { ObvsSubjectComponent } from './session-6/operators/obvs-subject/obvs-subject.component';
import { PipeDetailsComponent } from './session-6/pipe-details/pipe-details.component';
import { PipesComponent } from './session-6/pipes/pipes.component';
import { GetDataComponent } from './session-7/get-data/get-data.component';
import { PostDataComponent } from './session-7/post-data/post-data.component';

const routes: Routes = [
  {
    path: 'session-three',
    loadChildren: () =>
      import('./session-3/session-three.module').then(
        (m) => m.SessionThreeModule
      ),
  },
  {
    path: 'sessionFour',
    loadChildren: () =>
      import('./session-4/session-four.module').then(
        (m) => m.SessionFourModule
      ),
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
  {
    path: 'observable-of-from',
    title: 'observable of and from',
    component: ObvsOfFromComponent,
  },
  {
    path: 'observable-filter-map',
    title: 'observable filter  and map',
    component: ObvsFilterMapComponent,
  },
  {
    path: 'observable-subject',
    title: 'observable subject',
    component: ObvsSubjectComponent,
  },
  {
    path: 'http-post',
    title: 'Post Data',
    component: PostDataComponent,
  },
  {
    path: 'http-get',
    title: 'Get Data',
    component: GetDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
