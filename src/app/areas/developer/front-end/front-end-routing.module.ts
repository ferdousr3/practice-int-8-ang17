import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from '../back-end/react/react.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'react',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'react',
  //   component: ReactComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontEndRoutingModule {}
