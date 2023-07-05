import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "src/app/services/login.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  })
  constructor(private service: LoginService, private router: Router) { }

  invalidUserorPass: boolean = false
  ngOnInit(): void {
  }

  getData() {
    this.service.login(this.loginForm.value).subscribe((resp: any) => {
     
      if (resp == null) {
        this.invalidUserorPass = true;
      }
      else {
        this.service.loginUser(resp.username)
      }

      if (this.service.isLogedIn() == true) {
          this.router.navigateByUrl('home').then(() => { window.location.reload() });
      }
    } 
    )



  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

}
