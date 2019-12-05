import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasienService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    public getPasien() {
      return this.http.get(`${this.apiUrl}/pasien`);
    }

    public addPasien(pasien) {
      return this.http.post(`${this.apiUrl}/pasien`, pasien);
    }
}
