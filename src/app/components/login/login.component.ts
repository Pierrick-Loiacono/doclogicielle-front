import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail_input: string = "";
  pwd_input: string = "";
  error: string = "";

  constructor(private router: Router, private us: UserService) { }

  ngOnInit() {
    localStorage.clear();
  }

  IsLoggedIn() {
    return Object.keys(this.us.me()).length !== 0
  }

  /**
   * Redirect user if authentication is successfull
   */
  submitForm() {
    this.us.login(this.mail_input, this.pwd_input).subscribe(
      (data) => {
        if(data.id) {

          localStorage.setItem("user_id", data.id.toString() || "0");
          localStorage.setItem("usertype", data.usertype || "");
          if(data.usertype === "ADMIN") {
            this.us.getLastNotif().subscribe(
              notifs => localStorage.setItem("notif", notifs.content),
              err => console.error(err)
            );
          }
          this.router.navigateByUrl("/home?reload")

        } else {
          this.error = "Une erreur s'est produite, veuillez réessayer plus tard"
        }
      },
      (_) => this.error = "L'email ou le mot de passe est incorrect"
    )
  }

}
