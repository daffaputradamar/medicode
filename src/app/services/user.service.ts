import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getDokter() {
    return this.http.get(`${this.apiUrl}/user?posisi=dokter`);
  }

  public getPetugasMedis() {
    return this.http.get(`${this.apiUrl}/user?posisi=medis`);
  }

  public getApoteker() {
    return this.http.get(`${this.apiUrl}/user?posisi=apoteker`);
  }

  public addUser(user) {
    return this.http.post(`${this.apiUrl}/user`, user);
  }
}
