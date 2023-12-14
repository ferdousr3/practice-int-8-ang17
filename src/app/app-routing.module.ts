import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AdminComponent } from './areas/admin/admin.component';
import { DeveloperComponent } from './areas/developer/developer.component';
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
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./areas/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: AppRoutes.Developer,
    component: DeveloperComponent,
    loadChildren: () =>
      import('./areas/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
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
