import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import firebase from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userEmail: string;
  users: any;
  userId: any;
  names: any;
  usernames: any;

  mainuser: AngularFirestoreDocument;
  profilePic: any;
  sub: any;



  constructor(
      private afs: AngularFirestore,
      private router: Router,
      public authService: AuthenticationService,
      public afDatabase: AngularFireDatabase
  ) {
    //  this.mainuser = afs.doc('users/${user.getUID()}');
    //  this.sub = this.mainuser.valueChanges().subscribe(event => {
    //    this.usernames = event.usernames;
    //    this.profilePic = event.profilePict;
    // });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
}

  ngOnInit() {

    this.authService.getUserData().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(() => {
      this.userId = firebase.auth().currentUser.uid;
      console.log('USER ID CURRENT', this.userId);
      this.afDatabase.database.ref('users/' + this.userId).once('value').then( userDetailsAsObject => {

        this.names = userDetailsAsObject.val().names;
        this.userEmail = userDetailsAsObject.val().emails;
        this.usernames = userDetailsAsObject.val().usernames;

      }).catch( err => {
        console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
        console.log(err);
      });
    });
    // this.authService.userDetails().subscribe(res => {
    //   console.log('res', res);
    //   if (res !== null) {
    //     this.userEmail = res.email;
    //   }
    // }, err => {
    //   console.log('err', err);
    // })
  }

}
