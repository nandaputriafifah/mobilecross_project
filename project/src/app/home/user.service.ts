import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  sortedArray: Array <{username: string,total_points: Number}>;
  currentUserPosition: Number;
  private dbPath = '/users';
  userRef: AngularFireList<User> = null;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath);
   }

  getAllUsers(): AngularFireList<User> {
    return this.userRef;
  }
}