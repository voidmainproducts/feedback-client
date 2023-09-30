import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface User {
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  role:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public rest: HttpClient) {

  }



}
