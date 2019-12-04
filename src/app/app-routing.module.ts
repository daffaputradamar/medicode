import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ListDokterComponent } from "./pages/list-dokter/list-dokter.component";
import { AddDokterComponent } from "./pages/add-dokter/add-dokter.component";
import { LoginComponent } from "./pages/login/login.component";
import { DokterComponent } from './pages/dokter/dokter.component';
import { TambahresepComponent } from './pages/dokter/tambahresep/tambahresep.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "list-dokter",
    component: ListDokterComponent
  },
  {
    path: "add-dokter",
    component: AddDokterComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "dokter",
    component:DokterComponent
  },
  {
    path: "tambahresep",
    component:TambahresepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
