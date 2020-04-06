import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private myService: ServicesService, private router: Router) {
    this.signInForm = new FormGroup({
      adminUserName: new FormControl(''),
      adminPassword: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  activeAdmin(){
    this.myService.admin(this.signInForm);
  }

}
