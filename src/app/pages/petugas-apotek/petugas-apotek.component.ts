import { Component, OnInit } from '@angular/core';
import { ObatService } from 'src/app/services/obat.service';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-petugas-apotek',
  templateUrl: './petugas-apotek.component.html',
  styleUrls: ['./petugas-apotek.component.css']
})
export class PetugasApotekComponent implements OnInit {
  listObat;
  faPlus = faPlus
  constructor(
    private obatService : ObatService
  ) { }

  ngOnInit() {
    this.obatService.getObat().subscribe(obats => {
      this.listObat = obats;
    })
  }

}
