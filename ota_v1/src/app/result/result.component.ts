import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { answer } from 'database_files/answer';
import { quiz } from 'database_files/quiz';
import { DatabasesService } from '../services/databases.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  quiz: quiz[]=[];
  answers: answer[]=[];
  currentIndex: number = 0;
  endIndex:number = 9;

  constructor(private db:DatabasesService, private router:Router) { }

  ngOnInit(): void {
    
    this.db.getQuestions().subscribe(
      (response)=>  {this.quiz = response;},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
    
    this.db.getParticipantAnswers().subscribe(
      (response)=>  {this.answers = response;},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )

  }

  sum()
  {
  return this.answers.reduce((sum,item) => sum + item.answerScore,0);
  }

  testStatus()
  {
    if(this.answers.reduce((sum,item) => sum + item.answerScore,0) >= (this.answers.length*0.70)){
      return "\nYou have passed the Quiz.\nCongratulations!"
    }else{
      return "\nYou have failed the Quiz.\nPlease try again!"
    };
  }

  retakeQuiz()
  {
    this.router.navigate(['/quiz']);
  }

}