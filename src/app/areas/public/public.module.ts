import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicFooterComponent } from './layout/footer/footer.component';
import { PublicHeaderComponent } from './layout/header/header.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicFooterComponent,
    PublicHeaderComponent,
    RouterModule
  ],
})
export class PublicModule {}
