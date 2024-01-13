import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionHeaderComponent } from './layouts/header/header.component';
import { SessionSidebarComponent } from './layouts/sidebar/sidebar.component';
import { SessionsComponent } from './sessions.component';
import { DataBindingComponent } from './session-3/data-binding/data-binding.component';
import { TwoWayBindingComponent } from './session-3/two-way-binding/two-way-binding.component';
import { CoursesComponent } from './session-3/inputs/courses/courses.component';
import { SessionRoutingModule } from './session-routing.module';
import { ObvsFilterMapComponent } from './session-6/operators/obvs-filter-map/obvs-filter-map.component';

@NgModule({
  declarations: [SessionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SessionHeaderComponent,
    SessionSidebarComponent,
    DataBindingComponent,
    TwoWayBindingComponent,
    CoursesComponent,
    SessionRoutingModule
  ],
})
export class SessionsModule {}
