import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PoliService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getPoli() {
    return this.http.get(`${this.apiUrl}/poli`);
  }

  public addPoli(poli) {
    return this.http.post(`${this.apiUrl}/poli`, poli);
  }
}
