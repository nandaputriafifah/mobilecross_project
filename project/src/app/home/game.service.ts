import { Injectable } from '@angular/core';
import firebase from "firebase";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Batik} from "./batik";
import {Quiz} from "./quiz";
import {User} from "./user";
import {AngularFireModule} from "@angular/fire";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  // Database path for quiz
  private dbPath = '/quiz';
  quizRef: AngularFireList<Quiz> = null;
  userRef: AngularFireList<User> = null;
  user_id;
  totalQuiz: number = 10;
  ref = firebase.database().ref('/quiz');
  randomIndex = Math.floor(Math.random() * this.totalQuiz);

  // // database = firebase.database().ref();
  //
  // // Get data from users table in firebase
  // users_array = [];
  // users_name;
  // users_username;
  // users_email;
  // users_password;
  // users_id;
  //
  // // Get data from quiz database
  // quiz_questions = [];
  // quiz_choices;
  // quiz_answers = [];
  // quiz_id;
  // quiz_counter = 0;
  //
  //
  // // Get data from results database
  // results_user_results = [];
  // results_score;
  // results_user;
  // results_user_id;

  constructor(private db: AngularFireDatabase) {
    this.quizRef = db.list(this.dbPath);
    this.userRef = db.list('users/');
  }

  // Use this to get all data
  getAllQuizes(): AngularFireList<Quiz> {
    return this.quizRef;
  }


  // getUserId() {
  //   this.user_id = firebase.auth().currentUser.uid;
  //   return firebase.database().ref('users/'+ this.user_id + '/points');
  // }

  getUserData(): AngularFireList<User> {
    return this.userRef;
  }

  // getUserDataById(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User logged in already or has just logged in.
  //       this.user_id = user.uid;
  //       console.log('===USER ID===', this.user_id);
  //       return  firebase.database().ref('users/'+ this.user_id + '/points');
  //     } else {
  //       // User not logged in or has just logged out.
  //     }
  //   });
  // }

  // getUser() {
  //   let user = firebase.auth().currentUser;
  //   if (user) {
  //     var getUserInfo = firebase.database().ref('users/' + user.uid);
  //     getUserInfo.once('value', function(snapshot) {
  //       console.log('GET USERRRRR', snapshot.val()); //returns net_worth, etc
  //     });
  //   }
  // }

  // // quiz code
  // batikQuiz(quizId) {
  //   this.quiz_counter = 0;
  //   // this.clearArray(this.questions);
  //   const rootRef = firebase.database().ref('quiz/');
  //   rootRef.once('value', (snapshot) => {
  //     const value = snapshot.val();
  //     for (const key in value) {
  //       this.quiz_counter++;
  //       this.quiz_questions.push({
  //         counter: this.quiz_counter,
  //         question: key,
  //         answer: Object.keys(value[key]),
  //         value: Object.values(value[key])
  //       });
  //       // console.log(this.Questionz);
  //       // console.log(key);
  //       // console.log(value);
  //     }
  //   });
  //   console.log(this.quiz_questions);
  //
  //   return this.quiz_questions;
  // }

  //
  // clearArray(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     array.splice(i);
  //   }
  // }
  //
  // // get results from firebase
  // getResults(userId) {
  //   this.counter = 0;
  //   // let resultsquestion;
  //   // let gameID;
  //   // let values;
  //   this.clearArray(this.results);
  //   return firebase.database().ref('results/' + userId +  name).once('value').then( (snapshot) => {
  //     const values = snapshot.val();
  //     console.log(values);
  //
  //     return snapshot.val();
  //
  //   });
  // }
  //
  // UserInfor() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if (user) {
  //       this.user_id = user.uid;
  //     } else {
  //       // No user is signed in.
  //     }
  //   });
  //
  //   return this.user_id;
  // }

}
