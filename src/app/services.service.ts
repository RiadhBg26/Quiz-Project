import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  
  storedUsers = JSON.parse(localStorage.getItem('Registred Users')) || [];
  quizTab = JSON.parse(localStorage.getItem('Quiz Table')) || [];
  coach = null;
  loggedUser = null;
  value : any;
  myBoo =  false;
  constructor(private router: Router, private httpClient: HttpClient) { 

//----------------------------------------------candidates-------------------------------------------
    if(localStorage.getItem("connected User") || localStorage.getItem("connected User") !== 'null') {
      this.loggedUser = JSON.parse(localStorage.getItem("connected User"));
    } else {
      this.loggedUser = null;
    }
//-----------------------------------------------admin-----------------------------------------------
    if (localStorage.getItem("admin") || localStorage.getItem("admin") !== 'null') {
      this.coach = JSON.parse(localStorage.getItem("admin"));
      
    } else {
      this.coach = null;
      }
  }
  registerUser(registrationForm){
      this.storedUsers.push(registrationForm);
      localStorage.setItem('Registred Users',JSON.stringify(this.storedUsers));
  }

  activeUser(loginForm){
    if(localStorage.getItem("connected User") || localStorage.getItem("connected User") !== 'null') {
      this.loggedUser = JSON.parse(localStorage.getItem("connected User"));
    } else {
      this.loggedUser = null;
    }
 
    for (let i = 0; i < this.storedUsers.length; i++) {
      if(this.storedUsers[i].email == loginForm.get("loginMail").value && this.storedUsers[i].password == loginForm.get("loginPassword").value)
        this.loggedUser = this.storedUsers[i];
        localStorage.setItem('connected User', JSON.stringify(this.loggedUser));
    }
    localStorage.setItem('admin', 'null');
    location.reload();
    this.router.navigateByUrl('/quizlist');

    
  }

  admin(signInForm){
    if (localStorage.getItem("admin") || localStorage.getItem("admin") !== 'null') {
      this.coach = JSON.parse(localStorage.getItem("admin"));
      
    } else {
      this.coach = null;
      }
    if( signInForm.get('adminUserName').value == "admin" && signInForm.get('adminPassword').value == "admin" )
    this.coach = {
      userName : signInForm.get('adminUserName').value,
      password: signInForm.get('adminPassword').value
    } 
    localStorage.setItem('admin', JSON.stringify(this.coach));
      alert("welcome admin")
      localStorage.setItem('connected User', 'null')
      location.reload();
      this.router.navigateByUrl('/addquiz')
      return true
  }

  addQuiz(quizForm){
    this.quizTab.push(quizForm);
    for (let i = 0; i < this.quizTab.length; i++) {
      for (let j = 0; j < this.quizTab[i].quizOne.length; j++) {
        if(this.quizTab[i].quizOne[j].correctAnswer == this.quizTab[i].quizOne[j].firstAnswer ||
          this.quizTab[i].quizOne[j].correctAnswer == this.quizTab[i].quizOne[j].secondAnswer ||
          this.quizTab[i].quizOne[j].correctAnswer == this.quizTab[i].quizOne[j].thirdAnswer ||
          this.quizTab[i].quizOne[j].correctAnswer == this.quizTab[i].quizOne[j].fourthAnswer)
          {
            localStorage.setItem('Quiz Table', JSON.stringify(this.quizTab));
            alert("quiz Added")
            return true
        }
        else{
          localStorage.setItem('Quiz Table', 'null')
        }
      }
    }
  }
  delete(i) {
    this.quizTab = JSON.parse(localStorage.getItem('Quiz Table')) || [];
    this.quizTab.splice(i, 1)
    localStorage.setItem('Quiz Table', JSON.stringify(this.quizTab));
  }

  save(event){
    this.value = event.target.innerText.toString();  
    console.log(this.value)
    console.log(this.myBoo)
    for (let i = 0; i < this.quizTab.length; i++) {
      for (let j = 0; j < this.quizTab[i].quizOne.length; j++) {
        var x = this.quizTab[i].quizOne[j].correctAnswer.toString().toUpperCase();
        console.log(x);
        if(x === this.value){
          console.log(x);
          this.myBoo = true;
        }
      }
    }

 }
  logout(){
    localStorage.clear()
  }

}






// _________________Manage LocalStorage____________________
// localStorage.getItem('tip')                             // Get item value
// localStorage.setItem('tip','cool stuff')     // Set item value
// localStorage.removeItem('tip')                       // Remove item
// if (localStorage.getItem('tip') === null)  // Check if item exists

