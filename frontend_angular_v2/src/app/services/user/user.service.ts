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

  /* for users - user, quiz review, result */
  createNewUser(user: User) {
    /*
    this.hc.post(this.userServer, user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("completed")
    )
    */
    return this.fs.collection('user').add(user);
  }

  getUserList() {
    // return this.hc.get<User[]>(this.userServer);
    return this.fs.collection('user').snapshotChanges();
  }

  getUserById(id: string) {
    return this.fs.collection('user').doc(id).snapshotChanges();
  }

  updateUser(id: string, user: User) {
    // this.hc.put<User>(`${this.userServer}/${id}`, user);
    this.fs.collection('user').doc(id).update(user);
  }

  deleteUser(id: string) {
    // this.hc.delete(`${this.userServer}/${id}`);
    this.fs.collection('user').doc(id).delete();
  }

}
