import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.authService.fazerLogin("email", "senha").subscribe(
      resp => {
        console.log(resp.token)
        if (this.authService.getToken() == null)
          localStorage.setItem("token", resp.token);
        console.log(resp)
      }, error => {
        console.log(error)
      }
    );
  }

}
