import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import * as Http from 'http';
import firebase from "firebase";
import auth = firebase.auth;
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  mainuser: AngularFirestoreDocument;
  sub;
  usernames: any;
  profilePic: string;

  busy = false;
  password: any;
  newpassword: any;

  @ViewChild('fileBtn') fileBtn: {
    nativeElement: HTMLInputElement
  };

  constructor(
      // private http: Http,
      private afs: AngularFirestore,
      private alertController: AlertController,
      private user: AuthenticationService,
      private router:Router
  ) {
    // this.mainuser = afs.doc('users/${user.getUID()}')
    // this.sub = this.mainuser.valueChanges().subscribe(event => {
    //   this.usernames = event.usernames
    //   this.profilePic = event.profilePic
    // })
  }

  ngOnInit() {
  }

  updateProfilePic(){
    this.fileBtn.nativeElement.click()
  }

  uploadPic(event){
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'afbd4c71936aaa1d862f');

    // this.http.post('https://upload.uploadcare.com/base/', data)
    //     .subscribe(event => {
    //         const uuid = event.json().file
    //       this.mainuser.update({
    //         profilePic: uuid
    //       })
    //     })
  }
  async presentAler(title: string, content: string){
    let alett: any;
    // alett = await;
  }

  // async updateDetails() {
  //   this.busy = true
  //
  //   if (this.password){
  //     return this.presentAler('Error!', 'Masukan Password');
  //   }
  //   try {
  //     await this.user.reAuth(this.user.getUsername(), this.password);
  //   }catch (error){
  //     return this.presentAler('Error!', 'Password salah!');
  //   }
  //   if (this.newpassword){
  //     await this.user.updatePassword(this.newpassword);
  //   }
  //
  //   if (this.usernames !== this.user.getUsernames()){
  //     await this.user.updateEmail(this.usernames);
  //     this.mainuser.update({
  //       username: this.usernames
  //     });
  //   }
  //
  //   this.password = '';
  //   this.newpassword = '';
  //   this.busy = false;
  //
  //   await this.presentAler('Done!', 'Profile telah diperbarui');
  //
  //   this.router.navigate(['home']);
  // }

}


