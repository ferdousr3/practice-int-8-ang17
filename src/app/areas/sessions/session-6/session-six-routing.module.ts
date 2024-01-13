import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableConceptComponent } from './observable-concept/observable-concept.component';
import { ObservableComponent } from './observable/observable.component';
import { ObvsFilterMapComponent } from './operators/obvs-filter-map/obvs-filter-map.component';
import { ObvsOfFromComponent } from './operators/obvs-of-from/obvs-of-from.component';
import { ObvsSubjectComponent } from './operators/obvs-subject/obvs-subject.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipe-details',
    pathMatch: 'full',
  },
  {
    path: 'pipe-details',
    title: 'Pipes Details',
    loadComponent: () =>
      import('./pipe-details/pipe-details.component').then(
        (m) => m.PipeDetailsComponent
      ),
  },
  {
    path: 'pipes',
    title: 'Pipes',
    loadComponent: () =>
      import('./pipes/pipes.component').then((m) => m.PipesComponent),
  },
  {
    path: 'observable-concept',
    title: 'observable concept',
    loadComponent:()=> import('./observable-concept/observable-concept.component').then(m=>m.ObservableConceptComponent)
  },
  {
    path: 'observable',
    title: 'observable',
    loadComponent:()=> import('./observable/observable.component').then(m=>m.ObservableComponent)
  },
  {
    path: 'observable-of-from',
    title: 'observable of and from',
    loadComponent:()=> import('./operators/obvs-of-from/obvs-of-from.component').then(m=>m.ObvsOfFromComponent)
  },
  {
    path: 'observable-filter-map',
    title: 'observable filter  and map',
    loadComponent:()=> import('./operators/obvs-filter-map/obvs-filter-map.component').then(m=>m.ObvsFilterMapComponent)
  },
  {
    path: 'observable-subject',
    title: 'observable subject',
    loadComponent:()=> import('./operators/obvs-subject/obvs-subject.component').then(m=>m.ObvsSubjectComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionSixRoutingModule {}
