import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { answer } from 'database_files/answer';
import { participant } from 'database_files/participant';
import { quiz } from 'database_files/quiz';

@Injectable({
  providedIn: 'root'
})

export class DatabasesService {

  participantServer='http://localhost:3000/Participant';
  
  quizServer='http://localhost:4000/Quiz';

  answerServer='http://localhost:5000/Answer';

  constructor(private hc:HttpClient) { }

  sendParticipantDetails(newParticipant:participant)
  {
    this.hc.post(this.participantServer,newParticipant).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
      )
  }

  getParticipants()
  {
    return this.hc.get<participant[]>(this.participantServer);
  }

  getQuestions()
  {
    return this.hc.get<quiz[]>(this.quizServer);
  }   

  sendParticipantAnswers(newParticipantAnswer:answer)
  {
    return this.hc.post(this.answerServer,newParticipantAnswer).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    )
  }

  getParticipantAnswers()
  {
    return this.hc.get<answer[]>(this.answerServer);
  }

}
