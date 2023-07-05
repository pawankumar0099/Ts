import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(a: any) {
    return this.http.post("http://localhost:9992/login", a, { responseType: 'json' });
  }
  
  loginUser(username:any)
  {
      localStorage.setItem("username",username); 
      return true;
  }
  isLogedIn(){
    let token=localStorage.getItem("username");

    if(token=='undefined' || token=='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
