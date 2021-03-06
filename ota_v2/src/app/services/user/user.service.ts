import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  /* declare fake API server url to variables to be called below */
  userServer = 'http://localhost:3000/user';

  /* inject HttpClient to make API calls */
  constructor(private hc:HttpClient) { }

  /* for user - registration, login & admin */
  sendUserDetails(newUser:User){
    this.hc.post(this.userServer, newUser).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  getUserDetails(){
    return this.hc.get<User[]>(this.userServer);
  }

  getUserById(id: number){
    return this.hc.get<User>(`${this.userServer}/${id}`);
  }

  updateUserDetails(id: number, updateUser: User){
    this.hc.put<User>(`${this.userServer}/${id}`, updateUser).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  deleteUserDetails(id:number){
    this.hc.delete(`${this.userServer}/${id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
  }  
}