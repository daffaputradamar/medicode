import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-list-dokter",
  templateUrl: "./list-dokter.component.html",
  styleUrls: ["./list-dokter.component.css"]
})
export class ListDokterComponent implements OnInit {
  listDokter;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getDokter().subscribe(users => {
      this.listDokter = users;
    });
  }
}
