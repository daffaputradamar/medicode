import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petugas-medis',
  templateUrl: './petugas-medis.component.html',
  styleUrls: ['./petugas-medis.component.css']
})
export class PetugasMedisComponent implements OnInit {
  listPasien;

  constructor(
    private pasienService: PasienService
    ) { }

  ngOnInit() {
    this.pasienService.getPasien().subscribe(pasiens => {
      this.listPasien = pasiens;
    })
  }

}
