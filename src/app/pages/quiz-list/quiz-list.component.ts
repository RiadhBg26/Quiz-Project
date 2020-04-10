import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  pipes : SearchPipe;
  searchTerm : string;
  quizTable: any;
  expressType: string;
  theAnswer: string ;
  blankAnswer : any;
  constructor(private quizService: ServicesService, private router: Router) { }


  ngOnInit(): void {
    this.quizTable = this.quizService.quizTab; 
  }

  call() {
    this.quizService.addQuiz(this.quizTable.value);
  }

  update(){
    this.quizService.save(event);
  }
  handleEvent($event){
    return { format: `HH:mm:ss	` };
  }

  getKeys(obj){
    return Object.keys(obj)
  }
}
