import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeNewsComponent } from './type-news/type-news.component';
import { TypeAdvertisementComponent } from './type-advertisement/type-advertisement.component';
import { LayoutProvider } from './providers/layout';

@NgModule({
  declarations: [
    AppComponent,
    TypeNewsComponent,
    TypeAdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    TypeNewsComponent,
    TypeAdvertisementComponent,
  ],
  providers: [LayoutProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
