import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { formatDate } from "../../../assets/util/formatDate";

@Component({
  selector: "app-list-petugas-medis",
  templateUrl: "./list-petugas-medis.component.html",
  styleUrls: ["./list-petugas-medis.component.css"]
})
export class ListPetugasMedisComponent implements OnInit {
  listPetugasMedis;
  formattedDate = formatDate;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getPetugasMedis().subscribe(users => {
      this.listPetugasMedis = users;
    });
  }
}
