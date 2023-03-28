import { Component, OnInit } from '@angular/core';
import { Answers } from 'src/app/models/answers';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})

export class QuizReviewComponent implements OnInit {

  quiz: Quiz[] = [];
  answers: Answers[] = [];
  currentIndex: number = 0;
  endIndex: number = this.quiz.length;

  constructor(private qs: QuizService, private us: UserService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor='SlateBlue';
    document.body.style.position='fixed';
    this.getQuestions();
    this.getUserAnswers(JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('currentUser')))).id);
  }

  getQuestions() {
    this.qs.getQuizDetails().subscribe(
      response =>  {
        this.quiz = response.map(res=>res.payload.doc.data() as Quiz);
        this.endIndex = this.quiz.length;
      },
      error => console.log(error),
      () => console.log("completed")
    )
  }

  getUserAnswers(id: string) {
    this.us.getUserById(id).subscribe(
      response => {this.answers = JSON.parse(JSON.stringify(response.payload.data())).answers as Answers[]},
      error => console.log(error),
      () => console.log("completed")
    )
  }

}
