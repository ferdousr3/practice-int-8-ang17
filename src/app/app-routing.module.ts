import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { PublicComponent } from './areas/public/public.component';

const routes: Routes = [
  {
    path: AppRoutes.Public,
    component: PublicComponent,
    loadChildren: () =>
      import('./areas/public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
