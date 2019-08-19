import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  Password: any;
  Login: any;
  constructor(private globals: Globals,private route: Router) { }

  ngOnInit() {
    console.log(this.globals.users);
  }
  log() {
    this.globals.users.forEach(User => {
      if (this.Login !== null || this.Login !== '') 
      {
        if (User.login.toUpperCase() === this.Login.toUpperCase()) {
          if(User.password === this.Password) {
            this.globals.user= this.Login;
            console.log("Success");
            this.route.navigateByUrl('home')
          }
        }
      }
    });
  }

}
