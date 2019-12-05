import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ListDokterComponent } from "./pages/list-dokter/list-dokter.component";
import { ListPetugasMedisComponent } from "./pages/list-petugas-medis/list-petugas-medis.component";
import { ListPasienComponent } from "./pages/list-pasien/list-pasien.component";
import { ListPoliComponent } from "./pages/list-poli/list-poli.component";
import { ListApotekerComponent } from "./pages/list-apoteker/list-apoteker.component";
import { AddDokterComponent } from "./pages/add-dokter/add-dokter.component";
import { LoginComponent } from "./pages/login/login.component";
import { DokterComponent } from './pages/dokter/dokter.component';
import { TambahresepComponent } from './pages/dokter/tambahresep/tambahresep.component';
import { PetugasMedisComponent } from './pages/petugas-medis/petugas-medis.component';
import { TambahpasienComponent } from './pages/petugas-medis/tambahpasien/tambahpasien.component';
import { PetugasApotekComponent } from './pages/petugas-apotek/petugas-apotek.component';
import { TambahobatComponent } from './pages/petugas-apotek/tambahobat/tambahobat.component';
import { PendaftaranpoliComponent } from './pages/petugas-medis/pendaftaranpoli/pendaftaranpoli.component';
import { TambahComponent } from './pages/petugas-medis/pendaftaranpoli/tambah/tambah.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
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
    path: "list-petugas-medis",
    component: ListPetugasMedisComponent
  },
  {
    path: "list-pasien",
    component: ListPasienComponent
  },
  {
    path: "list-poli",
    component: ListPoliComponent
  },
  {
    path: "list-apoteker",
    component: ListApotekerComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dokter",
    component: DokterComponent
  },
  {
    path: "dokter/tambahresep",
    component:TambahresepComponent
  },
  {
    path: "petugasmedis",
    component:PetugasMedisComponent
  },
  {
    path: "petugasmedis/tambahpasien",
    component:TambahpasienComponent
  },
  {
    path: "petugasmedis/pendaftaranpoli",
    component:PendaftaranpoliComponent
  },
  {
    path: "petugasmedis/pendaftaranpoli/tambah/:id",
    component:TambahComponent
  },
  {
    path: "petugasapotek",
    component:PetugasApotekComponent
  },
  {
    path: "petugasapotek/tambahobat",
    component:TambahobatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
