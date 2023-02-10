import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { answer } from 'src/app/database_files/answer';
import { participant } from 'src/app/database_files/participant';
import { quiz } from 'src/app/database_files/quiz';
import quizjson from 'src/app/database_files/quiz.json';
import participantjson from 'src/app/database_files/participant.json';

@Injectable({
  providedIn: 'root'
})

export class DatabasesService {

  /*
  // Fake API JSON server
  participantServer='http://localhost:3000/Participant';
  quizServer='http://localhost:4000/Quiz';
  answerServer='http://localhost:5000/Answer';
  */

  quizArray: quiz[] = quizjson.Quiz;
  participant: participant[] = participantjson.Participant;

  constructor(private hc:HttpClient) { }

  sendParticipantDetails(newParticipant:participant){
    /*
    this.hc.post(this.participantServer,newParticipant).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
      )
    */

    localStorage.setItem("participant",JSON.stringify(newParticipant));
    participantjson.Participant.concat(newParticipant);
  }

  getParticipants(){
    /*
    return this.hc.get<participant[]>(this.participantServer);
    */
    return localStorage.getItem("participant");
  }

  getQuestions(){
    /*
    return this.hc.get<Quiz[]>(this.quizServer);
    */
    return this.quizArray;
  }   

  sendParticipantAnswers(newParticipantAnswer:answer[]){
    /*
    return this.hc.post(this.answerServer,newParticipantAnswer).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
    */
    localStorage.setItem("answers", JSON.stringify(newParticipantAnswer));
  }

  getParticipantAnswers(){
    /*
    return this.hc.get<answer[]>(this.answerServer);
    */
    return localStorage.getItem("answers");
  }

}