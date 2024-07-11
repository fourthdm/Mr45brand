import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  liked: boolean = false;

  registerform: FormGroup;
  user: any[] = [];

  constructor(private _rest: RestService, private _route: Router) {
    this.registerform = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  register() {
    this._rest.Register(this.registerform.value).subscribe((result: any) => {
      console.log(result);
      this.user.push(result);
      this.registerform.reset();
      this._route.navigate(['/cart']);
    }, (err: any) => {
      console.log(err);
    })
  }

  Show() {
    this.liked = !this.liked;
  }


}
