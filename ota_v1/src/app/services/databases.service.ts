import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { answer } from 'src/app/database_files/answer';
import { participant } from 'src/app/database_files/participant';
import { quiz } from 'src/app/database_files/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabasesService {

  /*
  Fake API JSON server

  participantServer='http://localhost:3000/Participant';
  
  quizServer='http://localhost:4000/Quiz';

  answerServer='http://localhost:5000/Answer';
  */

  // quizServer = 'https://onlinetestapp-8c5b6-default-rtdb.firebaseio.com/quiz.json';

  constructor(private hc:HttpClient, private store: AngularFirestore) { }

  sendParticipantDetails(newParticipant:participant)
  {
    /*
    this.hc.post(this.participantServer,newParticipant).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
      )
      */

    this.store.collection('participant').add(newParticipant)
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => console.log("completed"))
  }

  getParticipants(): Observable<any[]>
  {
    /*
    return this.hc.get<participant[]>(this.participantServer);
    */
    return this.store.collection('participant').snapshotChanges();
  }

  getQuestions(): Observable<any[]>
  {
    /*
    return this.hc.get<quiz[]>(this.quizServer);
    */
    return this.store.collection('quiz').snapshotChanges();
  }   

  sendParticipantAnswers(newParticipantAnswer:answer)
  {
    /*
    return this.hc.post(this.answerServer,newParticipantAnswer).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
    */
    this.store.collection('answers').add(newParticipantAnswer)
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => console.log("completed"))
  }

  getParticipantAnswers(): Observable<any[]>
  {
    /*
    return this.hc.get<answer[]>(this.answerServer);
    */
    return this.store.collection('answers').snapshotChanges();
  }

}
