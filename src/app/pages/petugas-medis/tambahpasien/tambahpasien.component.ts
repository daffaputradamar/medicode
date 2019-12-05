import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasienService } from 'src/app/services/pasien.service';

@Component({
  selector: 'app-tambahpasien',
  templateUrl: './tambahpasien.component.html',
  styleUrls: ['./tambahpasien.component.css']
})
export class TambahpasienComponent implements OnInit {
  pasienForm = this.fb.group({
    nama: ["", Validators.required],
    usia: ["", Validators.required],
    jenisKelamin : ["", Validators.required],
    alamat: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pasienService: PasienService
  ) { }
  

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pasienForm.value)
    if(this.pasienForm.valid){
      const addPasien ={
        nama: this.pasienForm.value.nama,
        usia: this.pasienForm.value.usia,
        alamat: this.pasienForm.value.alamat,
        jenisKelamin: this.pasienForm.value.jenisKelamin
      };
      this.pasienService.addPasien(addPasien).subscribe(event => {
        this.router.navigate(["petugasmedis"])
      })
    }
  }
}
