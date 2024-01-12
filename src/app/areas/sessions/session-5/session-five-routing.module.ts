import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SingleFormComponent } from './single-form/single-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-forms',
    pathMatch: 'full',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionFiveRoutingModule {}
