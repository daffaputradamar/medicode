import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien.service';
import { faPrint } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-petugas-medis',
  templateUrl: './petugas-medis.component.html',
  styleUrls: ['./petugas-medis.component.css']
})
export class PetugasMedisComponent implements OnInit {
  listPasien;
  faPrint = faPrint;

  constructor(
    private pasienService: PasienService
    ) { }

  ngOnInit() {
    this.pasienService.getPasien().subscribe(pasiens => {
      this.listPasien = pasiens;
    })
  }

}
