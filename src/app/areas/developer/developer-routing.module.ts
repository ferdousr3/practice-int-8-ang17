import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { ReactComponent } from './back-end/react/react.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'front-end',
    pathMatch: 'full',
  },
  {
    path: 'front-end',
    component: FrontEndComponent,
    // loadChildren: () =>
    //   import('./front-end/front-end.module').then((m) => m.FrontEndModule),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'react',
      },
      {
        path: 'react',
        component: ReactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
