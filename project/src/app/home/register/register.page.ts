import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
      public authService: AuthenticationService,
      public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(email, password, name, username){
    this.authService.RegisterUser(email.value, password.value, name.value, username.value)
        .then((res) => {
          // Do send verification email
          this.authService.SendVerificationMail()
          this.router.navigate(['/home/verify-email']);
        }).catch((error) => {
      window.alert(error.message)
    })
  }

}
