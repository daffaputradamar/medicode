import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { formatDate } from "../../../assets/util/formatDate";

@Component({
  selector: "app-list-apoteker",
  templateUrl: "./list-apoteker.component.html",
  styleUrls: ["./list-apoteker.component.css"]
})
export class ListApotekerComponent implements OnInit {
  listApoteker;
  formattedDate = formatDate;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getApoteker().subscribe(users => {
      this.listApoteker = users;
    });
  }
}
