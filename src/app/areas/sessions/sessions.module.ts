import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionHeaderComponent } from './layouts/header/header.component';
import { SessionSidebarComponent } from './layouts/sidebar/sidebar.component';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [SessionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SessionHeaderComponent,
    SessionSidebarComponent,
  ],
})
export class SessionsModule {}
