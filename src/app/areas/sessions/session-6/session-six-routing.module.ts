import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableConceptComponent } from './observable-concept/observable-concept.component';
import { ObservableComponent } from './observable/observable.component';
import { ObvsFilterMapComponent } from './operators/obvs-filter-map/obvs-filter-map.component';
import { ObvsOfFromComponent } from './operators/obvs-of-from/obvs-of-from.component';
import { ObvsSubjectComponent } from './operators/obvs-subject/obvs-subject.component';
import { PipeDetailsComponent } from './pipe-details/pipe-details.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipe-details',
    pathMatch: 'full',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionSixRoutingModule {}
