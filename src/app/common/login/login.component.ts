import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  liked: boolean = false;
  loginform: FormGroup;

  constructor(private _rest: RestService, private _state: StateService, private _route: Router) {
    this.loginform = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  login() {
    this._rest.Login(this.loginform.value).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.data);
      this._state.token = (data.data);
      this._state.decodetoken();
      this._route.navigate(['/home']);
    }, (err: any) => {
      console.log(err);
    });
  }

  Show(){
    this.liked = !this.liked;
  }

}