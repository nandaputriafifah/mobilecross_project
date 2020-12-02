import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  users: any;
  totalpoints: [];
  userUID: any;

  constructor(public userService:UserService, 
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.userService.getAllUsers().snapshotChanges().pipe(
      map(changes =>
          changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(data => {
      this.users = data;
      console.log(data);
      console.log(this.totalpoints);

      //this.users = this.db.list('users/').valueChanges();
      const usersRef = this.db.database.ref('users/');
      const ref = usersRef.orderByChild("total_points");

      ref.once('value').then(function(snap) {
        snap.forEach(function (childSnap) {
          this.totalpoints = childSnap.val();
         
          console.log(this.totalpoints);
        });
      });
    });
  }
}
