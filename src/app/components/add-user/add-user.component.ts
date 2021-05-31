import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  firstName: string = ""
  lastName: string = ""
  email: string = ""
  pwd: string = ""
  usertype: string = ""
  success: string = ""

  constructor(private us: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    this.us.create(this.firstName, this.lastName, this.email, this.pwd, this.usertype == "A" ? "ADMIN" : "USER")
    .subscribe(
      data => this.success = "Utilisateur ajouté",
      err => console.error(err)
    )
  }
}
