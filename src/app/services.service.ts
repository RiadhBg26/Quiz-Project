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
  getCandidateAnswer: any;
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
    for (let i = 0; i < this.storedUsers.length; i++) {
      if(this.storedUsers[i].email == loginForm.get("loginMail").value && this.storedUsers[i].password == loginForm.get("loginPassword").value)
        this.loggedUser = this.storedUsers[i];
        localStorage.setItem('Connected User', JSON.stringify(this.loggedUser));
        this.router.navigateByUrl('/quizlist')
    }
  }

  admin(signInForm){
    if( signInForm.get('adminUserName').value == "admin" && signInForm.get('adminPassword').value == "admin" )
    this.coach = {
      userName : signInForm.get('adminUserName').value,
      password: signInForm.get('adminPassword').value
    } 
    localStorage.setItem('admin', JSON.stringify(this.coach));
      alert("welcome admin")
      this.router.navigateByUrl('/addquiz')
      return true
  }

  addQuiz(quizForm){
    this.quizTab.push(quizForm);
    localStorage.setItem('Quiz Table', JSON.stringify(this.quizTab));
  }
  delete(i) {
    this.quizTab = JSON.parse(localStorage.getItem('Quiz Table')) || [];
    this.quizTab.splice(i, 1)
    localStorage.setItem('Quiz Table', JSON.stringify(this.quizTab));
  }

  save(theAnswer){
    console.log(theAnswer);
    
    for (let i = 0; i < this.quizTab.length; i++) {
      for (let j = 0; j < this.quizTab[i].quizTwo.length; j++) {
        // console.log(this.quizTab[i].quizTwo[j].candidateAnswer)
        this.getCandidateAnswer = this.quizTab[i].quizTwo[j].candidateAnswer = theAnswer;
        // this.getCandidateAnswer.push(theAnswer)
        console.log(this.getCandidateAnswer);
      }
    }
    console.log(this.getCandidateAnswer);
    
  }
}
