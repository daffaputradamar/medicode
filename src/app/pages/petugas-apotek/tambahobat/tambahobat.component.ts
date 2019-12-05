import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObatService } from 'src/app/services/obat.service';

@Component({
  selector: 'app-tambahobat',
  templateUrl: './tambahobat.component.html',
  styleUrls: ['./tambahobat.component.css']
})
export class TambahobatComponent implements OnInit {
  obatForm = this.fb.group({
    kode: ["", Validators.required],
    nama: ["", Validators.required],
    stok: ["", Validators.required],
    satuan: ["", Validators.required],
    harga: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private obatService: ObatService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.obatForm.value)
    if (this.obatForm.valid) {
      const addObat ={
        kode: this.obatForm.value.kode,
        nama: this.obatForm.value.nama,
        stok: this.obatForm.value.stok,
        satuan: this.obatForm.value.satuan,
        harga: this.obatForm.value.harga
      };
      this.obatService.addObat(addObat).subscribe(event => {
        this.router.navigate(["petugasapotek"])
      })
    }
  }
}
