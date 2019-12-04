import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { DokterComponent } from './pages/dokter/dokter.component';

const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "dokter",
    component:DokterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
