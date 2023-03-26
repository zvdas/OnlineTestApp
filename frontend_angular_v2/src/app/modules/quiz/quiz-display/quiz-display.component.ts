import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Answers } from 'src/app/models/answers';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})

export class QuizDisplayComponent implements OnInit {

  quiz: Quiz[] = [];
  currentIndex: number = 0;
  endIndex: number = 0;
  answer: Answers[] = [];
  quizForm = new FormControl('');

  constructor(private qs: QuizService, private us:UserService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.backgroundColor='SlateBlue';
    this.getQuiz();
  }

  getQuiz() {
    this.qs.getQuizDetails().subscribe(
      // response => console.log(response),
      response => {
        this.quiz = response.map(res=>res.payload.doc.data() as Quiz);
        this.endIndex = this.quiz.length;
        // Object.values(this.quiz).length;
      },
      error => console.log(error),
      () => console.log('completed')
    )
  }

  gradeQuiz(quizForm: any) {
    if(quizForm[0] === this.quiz[this.currentIndex].answer) {
      // this.as.createAnswerDetails({
      this.answer.push({
        selectedOption: quizForm[0],
        answerStatus: 'correct',
        answerScore: 1
      });
    } else {
      // this.as.createAnswerDetails({
      this.answer.push({
        selectedOption: quizForm[0],
        answerStatus: 'incorrect',
        answerScore: 0
      });
    };
  }

  onSubmit(quizForm: any){
    this.gradeQuiz(quizForm);

    if(this.currentIndex<this.endIndex-1) {
      this.currentIndex += 1;
    }
    // check below for difference between options array and optionA-D
    /*
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
    */
  }

  finishQuiz(quizForm: any){
    this.gradeQuiz(quizForm);
    console.log(this.answer);
    // this.as.createAnswerDetails(this.answer);
    this.router.navigate(['/result']);
  }

}
