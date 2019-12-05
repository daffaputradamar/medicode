import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-petugas-medis",
  templateUrl: "./add-petugas-medis.component.html",
  styleUrls: ["./add-petugas-medis.component.css"]
})
export class AddPetugasMedisComponent implements OnInit {
  petugasMedisForm = this.fb.group({
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
    console.log(this.petugasMedisForm.value);
    if (this.petugasMedisForm.valid) {
      const newPetugasMedis = {
        username: this.petugasMedisForm.value.username,
        password: this.petugasMedisForm.value.password,
        nama: this.petugasMedisForm.value.nama,
        jenisKelamin: this.petugasMedisForm.value.jenisKelamin,
        alamat: this.petugasMedisForm.value.alamat,
        posisi: 2
      };
      this.userService.addUser(newPetugasMedis).subscribe(user => {
        this.router.navigate(["list-petugas-medis"]);
      });
    }
  }
}
