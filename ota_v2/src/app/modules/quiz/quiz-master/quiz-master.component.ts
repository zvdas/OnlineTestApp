import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {

  quiz: Quiz[] = [];
  currentIndex: number = 0;
  endIndex: number = Object.values(this.quiz).length;

  constructor(private qs: QuizService) { }

  ngOnInit(): void {
    this.qs.getQuizDetails().subscribe(
      (response) => {this.quiz = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
  }

}