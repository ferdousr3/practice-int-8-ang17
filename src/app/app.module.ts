import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StrategyProviders } from './_core/strategies/strategy.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './areas/public/public.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PublicModule, RouterModule],
  providers: [StrategyProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
