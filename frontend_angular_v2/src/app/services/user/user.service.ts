import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  /* declare fake API server url to variables to be called below */
  userServer = 'http://localhost:3000/user';

  /* inject HttpClient to make API calls */
  constructor(private hc: HttpClient, private fs: AngularFirestore) { }

  /* for user - registration, login & admin */
  sendUserDetails(user: User){
    /*
    this.hc.post(this.userServer, newUser).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
      return this.fs.collection('user').add(user);
  }

  getUserDetails(){
    // return this.hc.get<User[]>(this.userServer);
    return this.fs.collection('user').snapshotChanges();
  }

  getUserById(id: string){
    // return this.hc.get<User>(`${this.userServer}/${id}`);
    return this.fs.collection('user').doc(id).snapshotChanges();
  }

  updateUserDetails(id: string, user: User){
    /*
    this.hc.put<User>(`${this.userServer}/${id}`, user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
   return this.fs.collection('user').doc(id).update(user);
  }

  deleteUserDetails(id: string){
    /*
    this.hc.delete(`${this.userServer}/${id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
   return this.fs.collection('user').doc(id).delete();
  }  
}