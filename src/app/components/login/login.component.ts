import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  mail_input: string = "";
  pwd_input: string = "";
  error: string = "";

  constructor(private router: Router, private us: UserService) { }

  IsLoggedIn() {
    return Object.keys(this.us.me()).length !== 0
  }

  /**
   * Redirect user if authentication is successfull
   */
  submitForm() {
    this.us.login(this.mail_input, this.pwd_input).subscribe(
      (data) => {
        if(data.token) {
          localStorage.setItem("token", data.token || "");
          this.router.navigate(["/home"])
        } else {
          this.error = "Une erreur s'est produite, veuillez réessayer plus tard"
        }
      },
      (_) => this.error = "L'email ou le mot de passe est incorrect"
    )
  }

}
