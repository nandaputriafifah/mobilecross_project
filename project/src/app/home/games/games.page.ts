import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  constructor(
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
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
              this.router.navigateByUrl('/home/register');
          }
        }
      ]
    });

    await alert.present();
  }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            spinner: 'dots',
            message: 'Mempersiapkan kuis...',
            duration: 4000
        });
        await loading.present();

        await loading.onDidDismiss().then( () => {
            this.router.navigateByUrl('/home/game-detail');
            console.log('Loading dismissed!');
        });
    }

}
