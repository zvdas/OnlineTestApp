import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answers } from 'src/app/classes/answers/answers';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {

  /* declare fake API server url to variables to be called below */
  answerServer = 'http://localhost:3000/answers';

  /* inject HttpClient to make API calls */
  constructor(private hc:HttpClient) { }

  /* for answers - review, result */
  sendAnswerDetails(newAnswers:Answers){
    this.hc.post(this.answerServer, newAnswers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  getAnswerDetails(){
    return this.hc.get<Answers[]>(this.answerServer);
  }
}