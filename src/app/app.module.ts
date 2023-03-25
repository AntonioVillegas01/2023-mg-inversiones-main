import {NgModule, SecurityContext} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustomCardSwiperComponent } from './components/custom-card-swiper/custom-card-swiper.component';
import {SwiperModule} from "swiper/angular";
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SafePipe } from './safe.pipe';
import {CommonModule} from "@angular/common";



function getBackendUrl(url: string): string {
  const backendUrl = 'http://localhost:1337/api'; // replace with your backend URL
  return `${backendUrl}/${url}`;
}
export function markedOptionsFactory(http: HttpClient): MarkedOptions {
  const renderer = new MarkedRenderer();
  renderer.image = (href: string, title: string, text: string) => {
    const url = new URL(href, window.location.href);
    if (url.protocol.startsWith('http')) {
      return `<img src="${href}" alt="${text}" title="${title}" />`;
    } else {
      return `<img src="${getBackendUrl(href)}" alt="${text}" title="${title}" />`;
    }
  };
  return {
    renderer: renderer,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    CustomCardSwiperComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    YouTubePlayerModule,

  ],
  providers: [],
  exports: [
    CustomCardSwiperComponent,
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
