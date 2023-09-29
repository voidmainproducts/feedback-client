import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  auth = {
    username:'',
    password:''
  }

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {}


  login(userData: any) {
    this.router.navigate(['dashboard'])
  }
}
