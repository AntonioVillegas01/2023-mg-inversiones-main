import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterOutlet} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class PagesModule { }
