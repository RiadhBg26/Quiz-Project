import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;
  formForService: any;
  constructor(private registrationService: ServicesService, private router: Router) {
    this.registrationForm = new FormGroup ({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl ('', [Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        password: new FormControl ('', 
        [ Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[a-z]/),Validators.pattern(/[A-Z]/),Validators.pattern(/[0-9]/),
          Validators.pattern(/[$&+,:;=?@#|'<>.^*()%!-]/),
        ]),
        confirmPassword: new FormControl() 
      });

    }

  ngOnInit(): void {
    this.formForService = this.registrationService.storedUsers.loginForm
  } 

  storeUsers() {
    this.ngOnInit();
    this.formForService = this.registrationService.registerUser(this.registrationForm.value)
    this.router.navigateByUrl("/login")
  }
}

