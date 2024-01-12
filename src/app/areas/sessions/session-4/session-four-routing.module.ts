import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRefVaComponent } from './template-ref-va/template-ref-va.component';
import { ViewChildConComponent } from './view-child-con/view-child-con.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { UseCssComponent } from './use-css/use-css.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-ref-va',
    pathMatch: 'full',
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
export class SessionFourRoutingModule {}
