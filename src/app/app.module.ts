import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeNewsComponent } from './type-news/type-news.component';
import { TypeAdvertisementComponent } from './type-advertisement/type-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeNewsComponent,
    TypeAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
