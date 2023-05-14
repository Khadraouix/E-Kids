import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  table :string[] =[];
  body = {
    email: "",
    password: "",
    username: ""
  };
  constructor() { }
}
