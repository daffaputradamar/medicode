import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasienService } from 'src/app/services/pasien.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit {

  pasien
  barcode
  // pendaftaranPoliForm = this.fb.group([
  //   kode,
  //   nama
  // ])
  

  constructor(private activatedRoute: ActivatedRoute, private pasienService: PasienService, private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.barcode = param.get('id')
      this.pasienService.getPasienByBarcode(this.barcode).subscribe(pasien => {
        this.pasien = pasien
      })
    })
  }
}
