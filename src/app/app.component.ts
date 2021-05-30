import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private location: Location) { }

  usertype: string = ""

  ngOnInit(): void {

    console.log(localStorage.getItem("usertype"))
    if(this.location.path() !== "/login") {
      // check if a usertype is set

      this.usertype = localStorage.getItem("usertype") || "";
    }
  }

}
