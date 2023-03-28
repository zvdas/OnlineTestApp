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
  answers: Answers[] = [];
  quizForm = new FormControl('');

  constructor(private qs: QuizService, private us:UserService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.backgroundColor='SlateBlue';
    this.getQuiz();
  }

  getQuiz() {
    this.qs.getQuizDetails().subscribe(
      response => {
        this.quiz = response.map(res=>res.payload.doc.data() as Quiz);
        this.endIndex = this.quiz.length;
      },
    )
  }

  gradeQuiz(quizForm: any) {
    if(quizForm[0] === this.quiz[this.currentIndex].answer) {
      this.answers.push({
        selectedOption: quizForm[0],
        answerStatus: 'correct',
        answerScore: 1
      });
    } else {
      this.answers.push({
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

  }

  quizObject() {
    const user = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))));
    user.answers = this.answers;
    return user;
  }

  finishQuiz(quizForm: any){
    this.gradeQuiz(quizForm);
    this.us.updateUser(this.quizObject().id, this.quizObject());
    this.router.navigateByUrl('/result');
  }

}
