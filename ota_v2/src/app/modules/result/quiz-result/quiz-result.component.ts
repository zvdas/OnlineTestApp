import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from 'src/app/classes/answers/answers';
import { Quiz } from 'src/app/classes/quiz/quiz';
import { AnswersService } from 'src/app/services/answers/answers.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})

export class QuizResultComponent implements OnInit {

  quiz!: Quiz[];
  answers!:Answers[];
  currentIndex: number = 0;
  endIndex: number = this.quiz.length;

  constructor(private qs: QuizService, private as: AnswersService, private router: Router) { }

  ngOnInit(): void {

    this.getQuestions();
    this.getAnsers();

  }

  getQuestions() {
    this.qs.getQuizDetails().subscribe(
      (response)=>  {this.quiz = response;},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
  }
  
  getAnsers() {
    this.as.getAnswerDetails().subscribe(
      (response)=>  {this.answers = response;},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
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