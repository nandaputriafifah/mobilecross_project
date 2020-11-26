import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {IonSlides} from "@ionic/angular";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {
  quizes: any;
  selectedChoice: string;
  selectedQuestion: string;
  score: number = 0;

  randomIndex = Math.floor(Math.random() * 10);
  contoh;

  index: number;
  show: boolean;
  doDisabled: boolean;
  user_id: string;

  totalPoints: any;
  userId: any;

  today = new Date();
  todaysDay = String(this.today.getDate()).padStart(2, '0');
  todaysMonth = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  todaysYear = this.today.getFullYear();
  todaysHour = this.today.getHours();
  todaysMinute= this.today.getMinutes();

  @ViewChild('quizSlider') slide: IonSlides;

  constructor(
      public gameService: GameService,
      public router: ActivatedRoute,
      public afDatabase: AngularFireDatabase
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
      firebase.database().ref('/quiz').once('value').then(quiz => this.contoh = quiz.key)
      console.log('CONTOH', this.contoh);
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
  }

  swipeNext(){
    this.slide.slideNext();
    this.slide.lockSwipeToPrev(true);
  }

  choiceSelected(event, question) {
    console.log('====== CHOICE SELECTED', event.detail.value);
    console.log('====== CHOICE DETAIL', event.detail);
    console.log('====== ANSWER', this.quizes);
    this.selectedChoice = event.detail.value;
    this.selectedQuestion = question;
    console.log('====== QUESTION', this.selectedQuestion);

  }

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


  postScoreToFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.user_id = user.uid;
        console.log('===USER ID===', this.user_id);
        firebase.database().ref('users/' + this.user_id + '/quiz_history').push({
          quiz_date: `${this.todaysDay}/${this.todaysMonth}/${this.todaysYear} ${this.todaysHour}:${this.todaysMinute}`,
          user_score: this.score,
          user_point: this.score / 10
        });

        firebase.database().ref('users/' + this.user_id + '/points').set({
          user_score: this.score,
          user_point: this.score / 10
        });

        firebase.database().ref('users/' + this.user_id ).update({
          total_points: this.totalPoints += this.score / 10
        });
      } else {
        // User not logged in or has just logged out.
      }
    });
  }

  /** TO DO: Add time limit
  runTimeLimit() {
    console.log('RUN', this.selectedChoice);
    if (typeof this.selectedChoice === 'undefined') {
      for (let index = 0; index <= 100; index++) {
        if (typeof this.selectedChoice !== 'undefined'){
          this.setPercentBar(0);
          break;
        }
        this.setPercentBar(+index);
      }
    } else if (typeof this.selectedChoice !== 'undefined'){
      this.setPercentBar(0);
    }
  }
   setPercentBar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      console.log(apc);
      this.quizTimeLimit = apc;
    }, 150 * i);
  }
   **/
}
