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
      (response) => console.log(`send quiz: ${response}`),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  getQuizDetails(){
    return this.hc.get<Quiz[]>(this.quizServer);
  }

  getQuizByID(id: number){
    return this.hc.get<Quiz>(`${this.quizServer}/${id}`);
  }

  updateQuizDetails(id: number, updateQuiz: Quiz){
    this.hc.put<Quiz>(`${this.quizServer}/${id}`, updateQuiz).subscribe(
      (response) => console.log(`update quiz: ${response}`),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  deleteQuizDetails(id: number){
    this.hc.delete(`${this.quizServer}/${id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

}