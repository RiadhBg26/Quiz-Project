import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizTable: any;
  expressType: string;
  theAnswer: string ;
  blankAnswer : any;
  constructor(private quizService: ServicesService, private router: Router) { }


  ngOnInit(): void {
    this.quizTable = this.quizService.quizTab; 
    this.quizService.getCandidateAnswer; 
   

  }
  call() {
    this.quizService.addQuiz(this.quizTable.value);
  }

  update(){
    this.quizService.save(this.theAnswer);
    for (let i = 0; i < this.quizTable.length; i++) {
      for (let j = 0; j < this.quizTable[i].quizTwo.length; j++) {
        this.quizTable[i].quizTwo[j].candidateAnswer = this.theAnswer;
        console.log(this.quizTable[i].quizTwo[j].candidateAnswer);
      }
    }
 
   
  }


  getKeys(obj){
    return Object.keys(obj)
  }


}
