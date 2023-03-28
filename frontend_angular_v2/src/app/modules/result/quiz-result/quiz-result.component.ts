import { Component, OnInit } from '@angular/core';
import { Answers } from 'src/app/models/answers';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UserService } from 'src/app/services/user/user.service';

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

  constructor(private qs: QuizService, private us: UserService) { }

  ngOnInit(): void {
    document.body.style.position='fixed';
    this.getQuestions();
    this.getUserAnswers(JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('currentUser')))).id);
  }

  getQuestions() {
    this.qs.getQuizDetails().subscribe(
      response =>  {this.quiz = response.map(res=>res.payload.doc.data() as Quiz)},
      // response => console.log(response),
      error => console.log(error),
      () => console.log("completed")
    )
  }

  getUserAnswers(id: string) {
    this.us.getUserById(id).subscribe(
      // response => console.log(response),
      response => {
        this.answers = JSON.parse(JSON.stringify(response.payload.data())).answers as Answers[]
        // console.log(JSON.parse(JSON.stringify(response.payload.data())).answers);
      },
      error => console.log(error),
      () => console.log("completed")
    )
  }

  sum() {
    return this.answers.reduce((sum,item) => sum + item.answerScore,0);
  }

  testStatus() {
    if(this.answers.reduce((sum,item) => sum + item.answerScore,0) >= (this.answers.length*0.70)){
      document.body.style.backgroundColor='MediumSeaGreen';
      return "\nYou have passed the Quiz.\nCongratulations!"
    }else{
      document.body.style.backgroundColor='Tomato';
      return "\nYou have failed the Quiz.\nPlease try again!"
    };
  }

}
