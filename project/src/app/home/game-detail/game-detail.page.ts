import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../game.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AlertController, IonContent, IonSlides, LoadingController} from '@ionic/angular';
import firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {
  quizes: any;
  selectedChoice: string;
  selectedQuestion: string;
  score = 0;
  index: number;
  quizTimeLimit: number;
  show: boolean;
  doDisabled: boolean;
  doDisabledSubmitButton: boolean;
  user_id: string;

  totalPoints: any;
  userId: any;

  today = new Date();
  todaysDay = String(this.today.getDate()).padStart(2, '0');
  todaysMonth = String(this.today.getMonth() + 1).padStart(2, '0'); // January is 0!
  todaysYear = this.today.getFullYear();
  todaysHour = this.today.getHours();
  todaysMinute = this.today.getMinutes();

  @ViewChild('quizSlider') slide: IonSlides;
  @ViewChild('content', { static: false }) content: IonContent;

  constructor(
      public gameService: GameService,
      public router: ActivatedRoute,
      public afDatabase: AngularFireDatabase,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private route: Router
  ) {
  }

  ngOnInit() {
    this.gameService.getAllQuizes().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({quiz_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.quizes = data;
      firebase.database().ref('/quiz').on('value', () => {});
      firebase.database().ref('/quiz').once('value', () => {});
    });

    this.gameService.getUserData().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(() => {
      this.userId = firebase.auth().currentUser.uid;
      console.log('USER ID CURRENT', this.userId);
      this.afDatabase.database.ref('users/' + this.userId).once('value').then( userDetailsAsObject => {

        this.totalPoints = userDetailsAsObject.val().total_points;
      }).catch( err => {
        console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
        console.log(err);
      });
    });

    this.doDisabled = false;
    this.show = false;
    this.doDisabledSubmitButton = true;
  }

  scrollToBottom() {
    this.content.scrollToBottom(300);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }

  swipeNext(){
    this.slide.slideNext();
    this.slide.lockSwipeToPrev(true);
  }

  // Get value of choice selected
  choiceSelected(event, question) {
    console.log('====== CHOICE SELECTED', event.detail.value);
    console.log('====== CHOICE DETAIL', event.detail);
    console.log('====== ANSWER', this.quizes);
    this.selectedChoice = event.detail.value;
    this.selectedQuestion = question;
    console.log('====== QUESTION', this.selectedQuestion);

  }

  // This to get index of current slides
  getIndexSlideChanged() {
    this.slide.getActiveIndex().then(index => {
      this.index = index + 1;
      console.log(this.index);
    });
  }

  getQuizResult() {
    console.log('SELECTED CHOICE', this.selectedChoice);
    console.log('QUIZ', this.quizes);

    for (let questionLength = 0; questionLength < this.quizes.length; questionLength++) {
        if (this.selectedChoice === this.quizes[questionLength].answer) {
          // Add score + 10 if selected choice is equal to answer
          this.score = this.score + 10;
          console.log('SCOREEE', this.score);
        }
    }
  }

  showAnswer() {
    this.show = true;
  }

  hideAnswer() {
    this.show = false;
  }

  disabledChoices() {
    this.doDisabled = true;
  }

  enabledChoices() {
    this.doDisabled = false;
  }

  disabledSubmitButton() {
    this.doDisabledSubmitButton = true;
  }

  hideSubmitButton() {
    this.doDisabledSubmitButton = false;
  }


  postScoreToFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.user_id = user.uid;
        console.log('===USER ID===', this.user_id);
        // This for post quiz history to field quiz_history in firebase
        firebase.database().ref('users/' + this.user_id + '/quiz_history').push({
          quiz_date: `${this.todaysDay}/${this.todaysMonth}/${this.todaysYear} ${this.todaysHour}:${this.todaysMinute}`,
          user_score: this.score,
          user_point: this.score / 10
        });

        // This for post score and point after played quiz to field points in firebase
        firebase.database().ref('users/' + this.user_id + '/points').set({
          user_score: this.score,
          user_point: this.score / 10
        });

        // This for update total_points for user
        firebase.database().ref('users/' + this.user_id ).update({
          total_points: this.totalPoints += this.score / 10
        });
      } else {
        // User not logged in or has just logged out.
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      spinner: 'dots',
      message: 'Mempersiapkan hasil kuis...',
      duration: 4000
    });
    await loading.present();

    await loading.onDidDismiss().then( () => {
      this.route.navigateByUrl('/home/results');
      console.log('Loading dismissed!');
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'KELUAR KUIS',
      message: 'Apakah kamu yakin ingin <br> mengakhiri kuis?',
      buttons: [
        {
          text: 'YA',
          handler: () =>
              this.presentLoading().then(() => {
                this.postScoreToFirebase();
                this.route.navigateByUrl('/home/results');
              })
        },
        {
          text: 'TIDAK',
          role: 'cancel'
        },
      ]
    });

    await alert.present();
  }

  // TO DO: Add time limit
  // runTimeLimit() {
  //   console.log('RUN', this.selectedChoice);
  //   if (typeof this.selectedChoice === 'undefined') {
  //     for (let index = 0; index <= 100; index++) {
  //       if (typeof this.selectedChoice !== 'undefined'){
  //         this.setPercentBar(0);
  //         break;
  //       }
  //       this.setPercentBar(+index);
  //     }
  //   } else if (typeof this.selectedChoice !== 'undefined'){
  //     this.setPercentBar(0);
  //   }
  // }
  //  setPercentBar(i) {
  //   setTimeout(() => {
  //     let apc = (i / 100)
  //     console.log(apc);
  //     this.quizTimeLimit = apc;
  //   }, 150 * i);
  // }
}
