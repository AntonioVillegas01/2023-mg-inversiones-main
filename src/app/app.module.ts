import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomCardSwiperComponent } from './components/custom-card-swiper/custom-card-swiper.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    CustomCardSwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  exports: [
    CustomCardSwiperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
