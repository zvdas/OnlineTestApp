import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { answer } from 'src/app/database_files/answer';
import { quiz } from 'src/app/database_files/quiz';
import { CountdownComponent } from 'ngx-countdown';
import { DatabasesService } from '../services/databases.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  quiz: quiz[] = [];
  pDetails: any;
  pDetailsparsed: any;
  currentIndex: number = 0;
  endIndex:number = 9;
  // endIndex:number = quiz.length;
  ansArray:answer[]=[];
  
  constructor(private db:DatabasesService, private router:Router) { }

  ngOnInit(): void {
    this.getQuizQuestions();
    // this.countdown.begin();
  }

  
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

  getQuizQuestions(){
    /*
    // for fakeAPI JSON server
    this.db.getQuestions().subscribe(
      (response) => {this.quiz = response},
      (error) => console.log(error),
      ()=> console.log("completed")
    );
    */

    this.quiz = this.db.getQuestions();
  }
  
  onSubmit(quizForm:NgForm){
    if(quizForm.value.selectedOption[0] === this.quiz[this.currentIndex].options[this.quiz[this.currentIndex].ansindex]){
      /*
      for fakeAPI JSON server
      this.db.sendParticipantAnswers({
        "selectedOption": quizForm.value.selectedOption[0],
        "answerStatus":"Correct", 
        "answerScore":1
      })
      */
      this.ansArray.push({
        "selectedOption" : quizForm.value.selectedOption[0],
        "answerStatus" : "Correct",
        "answerScore" : 1
      })
    }else{
      /*
      for fakeAPI JSON server
      this.db.sendParticipantAnswers({
        "selectedOption": quizForm.value.selectedOption[0],
        "answerStatus": "Incorrect",
        "answerScore": 0
      })
      */
      this.ansArray.push({
        "selectedOption" : quizForm.value.selectedOption[0],
        "answerStatus" : "Incorrect",
        "answerScore" : 0
      })
    };
  }

  finishQuiz(){
    this.db.sendParticipantAnswers(this.ansArray);
    this.router.navigate(['/result']);
  }

}