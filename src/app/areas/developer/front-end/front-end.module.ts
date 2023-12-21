import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { FrontEndComponent } from './front-end.component';


@NgModule({
  declarations: [
    FrontEndComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
