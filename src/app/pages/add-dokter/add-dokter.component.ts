import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-dokter",
  templateUrl: "./add-dokter.component.html",
  styleUrls: ["./add-dokter.component.css"]
})
export class AddDokterComponent implements OnInit {
  dokterForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    nama: ["", Validators.required],
    jenisKelamin: ["", Validators.required],
    alamat: ["", Validators.required]
  });

  jenisKelamins = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.dokterForm.value);
    if (this.dokterForm.valid) {
      const newDokter = {
        username: this.dokterForm.value.username,
        password: this.dokterForm.value.password,
        nama: this.dokterForm.value.nama,
        jenisKelamin: this.dokterForm.value.jenisKelamin,
        alamat: this.dokterForm.value.alamat,
        posisi: 1
      };
      this.userService.addUser(newDokter).subscribe(user => {
        this.router.navigate(["list-dokter"]);
      });
    }
  }
}
