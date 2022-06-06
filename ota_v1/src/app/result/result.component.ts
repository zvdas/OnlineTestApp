import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { answer } from 'src/app/database_files/answer';
import { quiz } from 'src/app/database_files/quiz';
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
  aDetails: any;
  aDetailsparsed: any;

  constructor(private db:DatabasesService, private router:Router) { }

  ngOnInit(): void {
    
    this.db.getQuestions().subscribe(
      (response)=>  {this.quiz = response.map(x=>x.payload.doc.data());},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
    
    /*
    for fakeAPI JSON server
    this.db.getParticipantAnswers().subscribe(
      (response)=>  {this.answers = response.map(x=>x.payload.doc.data());},
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
    */
    this.aDetails = localStorage.getItem('answers');
    this.aDetailsparsed = JSON.parse(this.aDetails);
    console.log(`result component answerarray : ${this.aDetails} & parsed : ${this.aDetailsparsed}`);

  }

  sum()
  {
    /*
    return this.answers.reduce((sum,item) => sum + item.answerScore,0);
    */
    return this.aDetailsparsed.reduce((sum: any, item: { answerScore: any; }) => sum + item.answerScore, 0);
  }

  testStatus()
  {
    // if(this.answers.reduce((sum,item) => sum + item.answerScore,0) >= (this.answers.length*0.70)){
      if(this.aDetailsparsed.reduce((sum: any,item: { answerScore: any; }) => sum + item.answerScore,0) >= (this.aDetailsparsed.length*0.70)){
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
