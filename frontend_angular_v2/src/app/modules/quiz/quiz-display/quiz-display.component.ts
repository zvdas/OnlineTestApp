import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/classes/quiz';
import { AnswersService } from 'src/app/services/answers/answers.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})

export class QuizDisplayComponent implements OnInit {

  quiz: Quiz[] = [];
  currentIndex: number = 0;
  endIndex: number = Object.values(this.quiz).length;

  constructor(private qs: QuizService, private as:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.getQuiz();
  }
  
  getQuiz() {
    this.qs.getQuizDetails().subscribe(
      // response => console.log(response),
      response => {this.quiz = response.map(res=>res.payload.doc.data() as Quiz)},
      error => console.log(error),
      () => console.log('completed')
    )
  }

  onSubmit(quizForm:NgForm){
    if(quizForm.value.selectedOption[0] === this.quiz[this.currentIndex].options[this.quiz[this.currentIndex].ansIndex]){
      this.as.createAnswerDetails({
        "selectedOption": quizForm.value.selectedOption[0],
        "answerStatus":"Correct", 
        "answerScore":1
      })
    }else{
      this.as.createAnswerDetails({
        "selectedOption": quizForm.value.selectedOption[0],
        "answerStatus": "Incorrect",
        "answerScore": 0
      })
    };
  }

  finishQuiz(){
    this.router.navigate(['/result']);
  }

}