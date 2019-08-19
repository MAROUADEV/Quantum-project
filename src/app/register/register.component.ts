import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  Password: any;
  Passwordconf:any;
  Login: any;
  constructor(private globals: Globals,private route: Router) { }

  ngOnInit() {
    console.log(this.globals.users);
  }
  

    add_user()
    {
      
      this.globals.users.push({'login':this.Login,'password':this.Password})
      this.route.navigateByUrl('login/login');
    }
    
    check()
    {
      if(this.Passwordconf != this.Password)
      {
        console.log('not match')
      }
      else
      {
        console.log('match')
      }
    }
    

}
