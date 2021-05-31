import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public location: Location) { }

  usertype: string = ""

  notif: string = "";

  ngOnInit(): void {

    if(this.location.path() !== "/login") {
      // check if a usertype is set
      this.usertype = localStorage.getItem("usertype") || "";
    }

    this.notif = localStorage.getItem("notif") || "";
  }

  showAlert() {
    const alert = localStorage.getItem("notif");
    if(alert) window.alert(alert);
  }
}
