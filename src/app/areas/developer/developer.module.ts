import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactComponent } from './back-end/react/react.component';
import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';
import { FrontEndModule } from './front-end/front-end.module';

@NgModule({
  declarations: [DeveloperComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FrontEndModule,
    ReactComponent,
  ],
})
export class DeveloperModule {}
