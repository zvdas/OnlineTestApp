import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Quiz } from 'src/app/models/quiz';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  /* declare fake API server url to variables to be called below */
  quizServer = 'http://localhost:3000/quiz';

  /* inject HttpClient to make API calls */
  constructor(private hc: HttpClient, private fs: AngularFirestore) { }

  /* for quiz - quiz, review, result & admin */
  addQuizDetails(quiz: Quiz){
    /*
    this.hc.post(this.quizServer, newQuiz).subscribe(
      (response) => console.log(`send quiz: ${response}`),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
    // console.log(quiz);
    this.fs.collection('quiz').add(quiz);
  }

  getQuizDetails(){
    // return this.hc.get<Quiz[]>(this.quizServer);
    return this.fs.collection('quiz').snapshotChanges();
  }

  getQuizByID(id: string){
    // return this.hc.get<Quiz>(`${this.quizServer}/${id}`);
    return this.fs.collection('quiz').doc(id).snapshotChanges();
  }

  updateQuizDetails(id: string, quiz: Quiz){
    /*
    this.hc.put<Quiz>(`${this.quizServer}/${id}`, quiz).subscribe(
      (response) => console.log(`update quiz: ${response}`),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
   this.fs.collection('quiz').doc(id).update(quiz);
  }

  deleteQuizDetails(id: string){
    /*
    this.hc.delete(`${this.quizServer}/${id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
   this.fs.collection('quiz').doc(id).delete();
  }

}