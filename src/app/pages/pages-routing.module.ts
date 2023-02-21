import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/layout.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {DesarrolloComponent} from "./desarrollo/desarrollo.component";
import {AlmavivaComponent} from "./almaviva/almaviva.component";
import {TerravivaComponent} from "./terraviva/terraviva.component";
import {DamComponent} from "./dam/dam.component";




const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
      {path: 'inicio', component: HomeComponent, data: {title: 'Inicio'},},
      {path: 'acerca-de', component: AboutComponent, data: {title: 'Acerca de'},},
      {path: 'desarrollos', component: ProjectsComponent, data: {title: 'Desarrollos'},},
      {path: 'desarrollo/almaviva', component: AlmavivaComponent, data: {title: 'Desarrollo'},},
      {path: 'desarrollo/terraviva', component: TerravivaComponent, data: {title: 'Desarrollo'},},
      {path: 'desarrollo/dam', component: DamComponent, data: {title: 'Desarrollo '},},
      {path: 'yucatan', component: AboutComponent, data: {title: 'Yucatán'},},
      {path: 'bio', component: ProjectsComponent, data: {title: 'Bio'},},
      {path: 'contacto', component: ContactComponent, data: {title: 'Contacto'},}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
