import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from './public.routes';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
