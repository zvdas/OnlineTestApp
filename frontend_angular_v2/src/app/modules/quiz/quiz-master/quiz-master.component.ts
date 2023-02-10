import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'src/app/classes/quiz/options';
import { Quiz } from 'src/app/classes/quiz/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {

  o!:Options;
  q!:Quiz;
  quiz!: Quiz[];
  msg='';

  constructor(private qs: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll(){
    this.qs.getQuizDetails().subscribe(
      (response) => {this.quiz = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
    console.log(`show quiz: ${JSON.stringify(this.quiz)}`)
  }

  getQuizById(id: number){
    this.qs.getQuizByID(id).subscribe(
      (response) => {this.q = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
    console.log(`get quiz: ${JSON.stringify(this.q)} id: ${id}`)
  }
  
  addQuiz(){
    console.log(`add  quiz: ${JSON.stringify(this.q)}`)
    this.qs.sendQuizDetails(this.q);
    this.msg = "Quiz added successfully.";
  }
  
  updateQuiz(){
    console.log(`update quiz: ${this.q}`)
    this.qs.updateQuizDetails(this.q.id, this.q)
    this.msg = "Quiz updated successfully.";
  }
  
  deleteQuiz(id: number){
    this.qs.deleteQuizDetails(id);
    this.msg = "Quiz deleted successfully.";
  }
  
  goToUserMaster(){
    this.router.navigate(['/userMaster'])
  }

}