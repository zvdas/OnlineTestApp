import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  /* inject HttpClient to make API calls */
  constructor(private hc: HttpClient, private fs: AngularFirestore) { }

  /* for users - user, quiz review, result */
  createNewUser(user: User) {
    return this.fs.collection('user').add(user);
  }

  getUserList() {
    return this.fs.collection('user').snapshotChanges();
  }

  getUserById(id: string) {
    return this.fs.collection('user').doc(id).snapshotChanges();
  }

  updateUser(id: string, user: User) {
    this.fs.collection('user').doc(id).update(user);
  }

  deleteUser(id: string) {
    this.fs.collection('user').doc(id).delete();
  }

}
