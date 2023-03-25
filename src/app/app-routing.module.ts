import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PagesRoutingModule} from "./pages/pages-routing.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/pages.module').then((m) => m.PagesModule),
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
