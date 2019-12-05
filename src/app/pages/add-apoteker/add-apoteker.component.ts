import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-apoteker",
  templateUrl: "./add-apoteker.component.html",
  styleUrls: ["./add-apoteker.component.css"]
})
export class AddApotekerComponent implements OnInit {
  apotekerForm = this.fb.group({
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
    if (this.apotekerForm.valid) {
      const newApoteker = {
        username: this.apotekerForm.value.username,
        password: this.apotekerForm.value.password,
        nama: this.apotekerForm.value.nama,
        jenisKelamin: this.apotekerForm.value.jenisKelamin,
        alamat: this.apotekerForm.value.alamat,
        posisi: 3
      };
      this.userService.addUser(newApoteker).subscribe(user => {
        this.router.navigate(["list-apoteker"]);
      });
    }
  }
}
