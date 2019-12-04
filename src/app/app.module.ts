import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DokterComponent } from './pages/dokter/dokter.component';
import { TambahresepComponent } from './pages/dokter/tambahresep/tambahresep.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DokterComponent,
    TambahresepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
