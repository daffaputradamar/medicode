import { Component, OnInit } from "@angular/core";
import { PasienService } from "src/app/services/pasien.service";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-list-pasien",
  templateUrl: "./list-pasien.component.html",
  styleUrls: ["./list-pasien.component.css"]
})
export class ListPasienComponent implements OnInit {
  listPasien;
  faPrint = faPrint;

  constructor(private pasienService: PasienService) {}

  ngOnInit() {
    this.pasienService.getPasien().subscribe(pasiens => {
      this.listPasien = pasiens;
    });
  }
}
