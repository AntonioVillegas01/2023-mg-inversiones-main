import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/layout.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {DesarrolloComponent} from "./desarrollo/desarrollo.component";
import {AlmavivaComponent} from "./almaviva/almaviva.component";
import {TerravivaComponent} from "./terraviva/terraviva.component";
import {DamComponent} from "./dam/dam.component";
import {DesarrollosComponent} from "./desarrollos/desarrollos.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BioComponent} from "./bio/bio.component";
import {YucatanComponent} from "./yucatan/yucatan.component";




const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
      {path: 'inicio', component: HomeComponent, data: {title: 'Inicio'},},
      {path: 'acerca-de', component: AboutComponent, data: {title: 'Acerca de'},},
      {path: 'desarrollos', component: DesarrollosComponent, data: {title: 'Desarrollos'},},
      {path: 'desarrollo/:id', component: DesarrolloComponent, data: {title: 'Desarrollo Detalle'},},
      {path: 'yucatan', component: YucatanComponent, data: {title: 'Yucatán'},},
      {path: 'bio', component: BioComponent, data: {title: 'Bio'},},
      {path: 'contacto', component: ContactComponent, data: {title: 'Contacto'},},


      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
