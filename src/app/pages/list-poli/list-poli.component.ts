import { Component, OnInit } from "@angular/core";
import { PoliService } from "src/app/services/poli.service";

@Component({
  selector: "app-list-poli",
  templateUrl: "./list-poli.component.html",
  styleUrls: ["./list-poli.component.css"]
})
export class ListPoliComponent implements OnInit {
  listPoli;

  constructor(private poliService: PoliService) {}

  ngOnInit() {
    this.poliService.getPoli().subscribe(polis => {
      this.listPoli = polis;
    });
  }
}
