import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  users: Array<User> = [];
  success: string = "";
  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.us.fetch().subscribe(
      data => this.users = data,
      err => console.error(err)
    )
  }

  delete(id: number){
    this.us.delete(id).subscribe(
      data => {
        this.success = "Utilisateur supprimé";
        window.location.reload();
      },
      err => console.error(err)
    )
  }

}
