import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Answers } from 'src/app/classes/answers/answers';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {

  /* declare fake API server url to variables to be called below */
  answerServer = 'http://localhost:3000/answers';

  /* inject HttpClient to make API calls */
  constructor(private hc: HttpClient, private fs: AngularFirestore) { }

  /* for answers - review, result */
  createAnswerDetails(answer: Answers){
    /*
    this.hc.post(this.answerServer, answers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
    this.fs.collection('answer').add(answer);
  }

  getAnswerDetails(){
    // return this.hc.get<Answers[]>(this.answerServer);
    return this.fs.collection('answer').snapshotChanges();
  }
}