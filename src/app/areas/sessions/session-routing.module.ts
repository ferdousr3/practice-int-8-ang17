import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './session-7/get-data/get-data.component';
import { PostDataComponent } from './session-7/post-data/post-data.component';

const routes: Routes = [
  {
    path: 'session-three',
    loadChildren: () =>
      import('./session-3/session-three.module').then(
        (m) => m.SessionThreeModule
      ),
  },
  {
    path: 'sessionFour',
    loadChildren: () =>
      import('./session-4/session-four.module').then(
        (m) => m.SessionFourModule
      ),
  },

  {
    path: 'sessionFive',
    loadChildren: () =>
      import('./session-5/session-five-routing.module').then(
        (m) => m.SessionFiveRoutingModule
      ),
  },

  {
    path: 'sessionSix',
    loadChildren: () =>
      import('./session-6/session-six-routing.module').then(
        (m) => m.SessionSixRoutingModule
      ),
  },

  {
    path: 'http-post',
    title: 'Post Data',
    component: PostDataComponent,
  },
  {
    path: 'http-get',
    title: 'Get Data',
    component: GetDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
