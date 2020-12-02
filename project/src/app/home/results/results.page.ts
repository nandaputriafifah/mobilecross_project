import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  userPoints: any;
  userScores: any;
  userId: any;

  constructor(
      public gameService: GameService,
      public afDatabase: AngularFireDatabase,
      public router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.gameService.getUserData().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(() => {
      this.userId = firebase.auth().currentUser.uid;
      console.log('USER ID CURRENT', this.userId);
      this.afDatabase.database.ref('users/' + this.userId).once('value').then( userDetailsAsObject => {

       this.userPoints = userDetailsAsObject.val().points.user_point;
       this.userScores = userDetailsAsObject.val().points.user_score;

      }).catch( err => {
        console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
        console.log(err);
      });
    });
  }

}
