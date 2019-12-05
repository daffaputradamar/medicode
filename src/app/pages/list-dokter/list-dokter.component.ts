import { Component, OnInit, OnChanges } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { formatDate } from "../../../assets/util/formatDate";

@Component({
  selector: "app-list-dokter",
  templateUrl: "./list-dokter.component.html",
  styleUrls: ["./list-dokter.component.css"]
})
export class ListDokterComponent implements OnInit {
  listDokter;
  formattedDate = formatDate;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getDokter().subscribe(users => {
      this.listDokter = users;
    });
  }
}
