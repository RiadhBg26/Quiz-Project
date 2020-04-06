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
  constructor(private quizService: ServicesService, private router: Router) { }


  ngOnInit(): void {
    this.quizTable = this.quizService.quizTab; 

  }
  call() {
    this.quizService.addQuiz(this.quizTable.value);
  
    
  }

}
