import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObatService {
  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getObat(){
    return this.http.get(`${this.apiUrl}/obat`);
  }

  public addObat(obat) {
    return this.http.post(`${this.apiUrl}/obat`, obat);
  }
}
