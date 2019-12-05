import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ListDokterComponent } from "./pages/list-dokter/list-dokter.component";
import { AddDokterComponent } from "./pages/add-dokter/add-dokter.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListPetugasMedisComponent } from "./pages/list-petugas-medis/list-petugas-medis.component";
import { ListPasienComponent } from "./pages/list-pasien/list-pasien.component";
import { ListPoliComponent } from "./pages/list-poli/list-poli.component";
import { ListApotekerComponent } from "./pages/list-apoteker/list-apoteker.component";
import { DokterComponent } from "./pages/dokter/dokter.component";
import { TambahresepComponent } from "./pages/dokter/tambahresep/tambahresep.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ListDokterComponent,
    AddDokterComponent,
    LoginComponent,
    ListPetugasMedisComponent,
    ListPasienComponent,
    ListPoliComponent,
    ListApotekerComponent,
    DokterComponent,
    TambahresepComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
