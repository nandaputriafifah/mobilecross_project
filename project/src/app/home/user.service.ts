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

  // getUsers(){

  //   let users: Array <{username: string,total_points: Number}>;
  //   this.userRef.on('value',userSnapshot =>{ // you need to define your item Ref as a global variable in this service
  //     userSnapshot.forEach( userSnap => {
  //       this.users.push(userSnap.val());
  //     });
  //       this.sortUsers(users);
  //   });
  // }

  // sortUsers(users) {
  //   this.sortedArray = users.sort(function(a, b) {
  //     return b.total_points - a.total_points // descending
  //     //return a.total_points - b.total_points // accending
  //   });
  // }

  // getUserPosition(user){ 
  //   this.currentUserPosition = this.sortedArray.map(function (x) { return x.username}).indexOf(user.username);
  // }
}