import { Component, OnInit } from "@angular/core";
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  userList: any;

  constructor(private myService: ServicesService, private router: Router) {

  }

  ngOnInit() {
    this.userList = this.myService.storedUsers
  }
  getUsers(){
    this.myService.registerUser(this.userList.value);
  }
}
