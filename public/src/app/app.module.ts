import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherService } from './weather.service';

import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SanJoseComponent,
    SeattleComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
