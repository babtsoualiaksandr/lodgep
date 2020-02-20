import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Subject } from 'rxjs/internal/Subject';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: User;
  public newUser: Subject<User> = new Subject();
  constructor() {}
  ngOnInit() {}

  printUser(event) {
    console.log(event);

  }

  printError(event) {
    console.error(event);
  }

}
