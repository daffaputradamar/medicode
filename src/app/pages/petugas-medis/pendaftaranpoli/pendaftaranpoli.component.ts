import { Component, OnInit } from '@angular/core';
import { PendaftaranpoliService } from 'src/app/services/pendaftaranpoli.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendaftaranpoli',
  templateUrl: './pendaftaranpoli.component.html',
  styleUrls: ['./pendaftaranpoli.component.css']
})
export class PendaftaranpoliComponent implements OnInit {
  listBerobat;
  Pasien;
  cariPasienPoli = this.fb.group({
    barcodePasien: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pendaftaranPoliService : PendaftaranpoliService
  ) { }

  ngOnInit() {
    console.log(this.listBerobat)
    this.pendaftaranPoliService.getPendaftaranPoli().subscribe(berobat => {
      this.listBerobat = berobat;
    })
  }

  onSubmit(){
    if (this.cariPasienPoli) {
      this.router.navigate([`petugasmedis/pendaftaranpoli/tambah/${this.cariPasienPoli.value.barcodePasien}`])
    }
  }

}
