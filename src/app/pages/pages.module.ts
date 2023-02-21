import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { AlmavivaComponent } from './almaviva/almaviva.component';
import { TerravivaComponent } from './terraviva/terraviva.component';
import { DamComponent } from './dam/dam.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LayoutComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    PartnersComponent,
    FooterComponent,
    DesarrolloComponent,
    AlmavivaComponent,
    TerravivaComponent,
    DamComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class PagesModule { }
