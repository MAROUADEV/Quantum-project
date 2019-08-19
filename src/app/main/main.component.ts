import { Globals } from './../globals';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
})
export class HomeComponent {
  title = 'app';
  constructor(private globals: Globals,private route: Router) {
   console.log("Hello");
  }
  ngOnInit() 
  {
    if (this.globals.user === '' || this.globals.user === null) 
    {
      this.route.navigateByUrl('login/login');
    }
    
  }
}
