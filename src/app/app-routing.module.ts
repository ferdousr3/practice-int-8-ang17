import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { PublicComponent } from './areas/public/public.component';
import { PageNotFoundComponent } from './areas/public/views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: AppRoutes.Public,
    component: PublicComponent,
    loadChildren: () =>
      import('./areas/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '**',
    title: 'page Not found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
