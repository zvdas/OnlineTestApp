import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Quiz } from 'src/app/models/quiz';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  /* inject Angular Firestore Client to make API calls */
  constructor(private fs: AngularFirestore) { }

  /* for quiz - quiz, review, result & admin */
  addQuizDetails(quiz: Quiz){
    // this.hc.post(this.quizServer, newQuiz);
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
    // this.hc.put<Quiz>(`${this.quizServer}/${id}`, quiz);
   this.fs.collection('quiz').doc(id).update(quiz);
  }

  deleteQuizDetails(id: string){
    // this.hc.delete(`${this.quizServer}/${id}`);
   this.fs.collection('quiz').doc(id).delete();
  }

}