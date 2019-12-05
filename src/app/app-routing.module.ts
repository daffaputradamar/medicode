import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ListDokterComponent } from "./pages/list-dokter/list-dokter.component";
import { AddDokterComponent } from "./pages/add-dokter/add-dokter.component";
import { LoginComponent } from "./pages/login/login.component";
import { DokterComponent } from './pages/dokter/dokter.component';
import { TambahresepComponent } from './pages/dokter/tambahresep/tambahresep.component';
import { PetugasMedisComponent } from './pages/petugas-medis/petugas-medis.component';
import { TambahpasienComponent } from './pages/petugas-medis/tambahpasien/tambahpasien.component';

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
  },
  {
    path: "petugasmedis",
    component:PetugasMedisComponent
  },
  {
    path: "tambahpasien",
    component:TambahpasienComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
