import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from 'src/app/classes/answers';
import { Quiz } from 'src/app/classes/quiz';
import { AnswersService } from 'src/app/services/answers/answers.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})

export class QuizResultComponent implements OnInit {
  quiz: Quiz[] = []; 
  answers: Answers[] = [];
  currentIndex: number = 0;
  endIndex: number = this.quiz.length;

  constructor(private qs: QuizService, private as: AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
  }

  getQuestions() {
    this.qs.getQuizDetails().subscribe(
      response =>  {this.quiz = response.map(res=>res.payload.doc.data() as Quiz)},
      // response => console.log(response),
      error => console.log(error),
      () => console.log("completed")
    )
  }
  
  getAnswers() {
    this.as.getAnswerDetails().subscribe(
      response => {this.answers = response.map(res=>res.payload.doc.data() as Answers)},
      // response => console.log(response),
      error => console.log(error),
      () => console.log("completed")
    )
  }

  sum() {
    return this.answers.reduce((sum,item) => sum + item.answerScore,0);
  }

  testStatus() {
    if(this.answers.reduce((sum,item) => sum + item.answerScore,0) >= (this.answers.length*0.70)){
      return "\nYou have passed the Quiz.\nCongratulations!"
    }else{
      return "\nYou have failed the Quiz.\nPlease try again!"
    };
  }

  retakeQuiz() {
    this.router.navigate(['/quiz']);
  }

}