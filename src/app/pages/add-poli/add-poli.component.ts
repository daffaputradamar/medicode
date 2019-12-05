import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { PoliService } from "src/app/services/poli.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-poli",
  templateUrl: "./add-poli.component.html",
  styleUrls: ["./add-poli.component.css"]
})
export class AddPoliComponent implements OnInit {
  poliForm = this.fb.group({
    idPoli: ["", Validators.required],
    nama: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private poliService: PoliService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.poliForm.valid) {
      const newPoli = {
        idPoli: this.poliForm.value.idPoli,
        nama: this.poliForm.value.nama
      };
      this.poliService.addPoli(newPoli).subscribe(poli => {
        this.router.navigate(["list-poli"]);
      });
    }
  }
}
