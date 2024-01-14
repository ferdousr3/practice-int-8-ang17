import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from './public.routes';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: PublicRoutes.homeRoute.path,
    title: PublicRoutes.homeRoute.title,
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: PublicRoutes.contactRoute.path,
    title: PublicRoutes.contactRoute.title,
    loadComponent: () => import('./views/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'tooltip',
    title: 'tooltip',
    loadComponent: () => import('./views/tool-tip-design/tool-tip-design.component').then(m => m.ToolTipDesignComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
