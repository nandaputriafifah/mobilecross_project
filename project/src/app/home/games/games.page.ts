import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  constructor(
      private alertCtrl: AlertController,
      private router: Router,
      public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'MASUK AKUN',
      message: 'Untuk bermain <strong>KUTIK</strong>, \n' + 'kamu harus masuk akun \n' +
          'terlebih dahulu. \n\n' + 'Apakah kamu sudah \n' + 'memiliki akun?',
      buttons: [
       {
          text: 'YA',
          handler: () =>
            this.router.navigateByUrl('/home/login')
        },
        {
          text: 'BELUM',
          role: 'register',
          handler: () => {
              this.router.navigateByUrl('/home/register')
          }
        }
      ]
    });

    await alert.present();
  }

}
