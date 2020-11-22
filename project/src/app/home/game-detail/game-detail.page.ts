import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {
  quizes = [];
  selectedChoice: string;
  score: number;
  index: number;

  @ViewChild('quizSlider') slide: IonSlides;

  // quiz_array = [];
  // quiz_questions = [];
  // quiz_choices;
  // quiz_answers = [];
  // quiz_id;
  // quiz_counter = 0;

  // ID
  // questions = [];
  //
  // // getting user details
  // user = firebase.auth().currentUser;
  // user_id;
  // gamescore: number = 0;
  //
  // questionSet = [];
  // Answers = [];
  // game_array = [];
  // index = 0;
  // correct_answer;
  // score_boolean;
  //
  // Userids;

  constructor(
      public gameService: GameService,
      public router: ActivatedRoute
  ) {
    // this.user_id = this.gameService.Return_ID();
    // this.quiz_questions = this.gameService.batikQuiz(1);
    // this.Userids = this.gameService.UserInfor();
  }

  ngOnInit() {
    this.gameService.getAllQuizes().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({quiz_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.quizes = data;
      console.log(data);
    });
    this.score = 0;
  }

  swipeNext(){
    this.slide.slideNext();
  }

  choiceSelected(event) {
    console.log('====== CHOICE SELECTED', event.detail.value);
    console.log('====== ANSWER', this.quizes);
    this.selectedChoice = event.detail.value;
    // if (this.selectedChoice === this.quizes.answer) {
    //   console.log('BENR');
    // }
  }

  getIndexSlideChanged() {
    this.slide.getActiveIndex().then(index => {
      this.index = index + 1;
      console.log(this.index);
    });
  }
  //

  // pushToGameArray(question, answer, correct_answer, score_boolean) {
  //   this.quiz_array.push({
  //     question: question,
  //     answer: answer,
  //     correct_answer: correct_answer, // undefined
  //     score_boolean: score_boolean //undefined
  //   });
  //   // console.log(this.gameArray);
  // }

  // score(event, Question) {
  //   const question: string = Question;
  //   const Answer: string = event.detail.value;
  //   let correctAnswer: string;
  //   let scoreBoolean: string;
  //   // console.log(question);
  //   // console.log(Answer);
  //
  //   // second phase
  //   if (this.questions.length >= 1) {
  //     // console.log(this.Questionz);
  //     console.log(question);
  //     for (let i = 0; i < this.questions.length; i++) {
  //       // console.log(i);
  //       if (this.questions[i].Question === Question) {
  //         for (let n = 0; n < this.questions[i].Answer.length; n++) {
  //           // console.log(this.Questionz[i].value[n]);
  //           if (this.questions[i].value[n]) {
  //             // console.log(this.Questionz[i].Answer[n]);
  //             this.correct_answer = this.questions[i].Answer[n];
  //             // console.log(this.correctAnswer);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   if (this.correct_answer === Answer) {
  //     this.score_boolean = true;
  //     console.log(this.score_boolean);
  //     console.log("correct answer");
  //   }
  //   if (this.correct_answer !== Answer) {
  //     this.score_boolean = false;
  //     console.log("wrong answer");
  //   }
  //
  //   // 1st phase
  //   if (this.game_array.length === 0) {
  //     this.pushToGameArray(Question, Answer, this.correct_answer, this.score_boolean);
  //     // console.log('pushed to array successfully');
  //   } else if (this.game_array.length > 0) {
  //     // console.log('Entered into else clause');
  //     for (let i = 0; i < this.game_array.length; i++) {
  //       // console.log('Entered into for loop');
  //       if (this.game_array[i].gameQuestions === question) {
  //         console.log('Question has a match in game array');
  //         this.index = this.game_array.indexOf(this.game_array[i]);
  //         // console.log(this.index);
  //       } else {
  //         // console.log('no match in game array');
  //         this.index = null;
  //       }
  //     }
  //
  //     if (this.index != null) {
  //       console.log(this.index);
  //       this.game_array[this.index].Answer = Answer;
  //       this.game_array[this.index].scoreBoolean = this.score_boolean;
  //       console.log(Answer);
  //     } else if (this.index === null) {
  //       this.pushToGameArray(Question, Answer, this.correct_answer, this.score_boolean);
  //     }
  //   }
  //   console.log(this.game_array);
  //   console.log(this.index);
  //
  //   // getting user infor
  //   if (this.user != null) {
  //     this.user_id = this.user.uid;
  //     console.log(this.user_id);
  //   }
  // }

}
