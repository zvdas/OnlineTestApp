import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz/quiz';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  /* declare fake API server url to variables to be called below */
  quizServer = 'http://localhost:3000/quiz';

  /* inject HttpClient to make API calls */
  constructor(private hc:HttpClient) { }

  /* for quiz - quiz, review, result & admin */
  sendQuizDetails(newQuiz:Quiz){
    this.hc.post(this.quizServer, newQuiz).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  getQuizDetails(){
    return this.hc.get<Quiz[]>(this.quizServer);
  }

  updateQuizDetails(){

  }

  deleteQuizDetails(){

  }

}
