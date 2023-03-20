import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {

  quiz: Quiz = {} as Quiz;
  quizList: Quiz[] = [];
  msg='';

  constructor(private qs: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll(){
    this.qs.getQuizDetails().subscribe(
      // response => console.log(response),
      response => {this.quizList = response.map(res=>res.payload.doc.data() as Quiz)},
      error => console.log(error),
      () => console.log('completed')
    )
    console.log(`show quiz: ${JSON.stringify(this.quizList)}`)
  }

  getQuizById(id: string){
    this.qs.getQuizByID(id).subscribe(
      // response => console.log(response),
      response => {this.quiz = response.payload.data() as Quiz},
      error => console.log(error),
      () => console.log('completed')
    )
    // console.log(`get quiz: ${JSON.stringify(this.quiz)} id: ${id}`)
  }
  
  addQuiz(){
    console.log(`add  quiz: ${JSON.stringify(this.quiz)}`)
    this.qs.addQuizDetails(this.quiz);
    this.msg = "Quiz added successfully.";
  }
  
  updateQuiz(){
    /*
    console.log(`update quiz: ${this.quiz}`)
    this.qs.updateQuizDetails(this.quiz.id, this.quiz);
    this.msg = "Quiz updated successfully.";
    */
  }
  
  deleteQuiz(id: string){
    this.qs.deleteQuizDetails(id);
    this.msg = "Quiz deleted successfully.";
  }
  
  goToUserMaster(){
    this.router.navigate(['/userMaster'])
  }

}
