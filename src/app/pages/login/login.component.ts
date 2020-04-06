import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  
  constructor(private loginService: ServicesService, private router: Router){
    this.loginForm= new FormGroup({
      loginMail: new FormControl('',Validators.required),
      loginPassword: new FormControl('',Validators.required),

    })
  }

  ngOnInit() {
  
  }

  connectedUser(){
    this.loginService.activeUser(this.loginForm);
    }
}
