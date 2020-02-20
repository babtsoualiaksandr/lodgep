import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  public user: User;
  constructor(
    private router: Router

  ) {}

  ngOnInit() {

  }

  onChangLang(lang: string): void {
    console.log('changeLang', lang);

  }

  toggleSideBarShow() {
    this.toggleSideBar.emit();
  }

  signIn() {
    this.router.navigate(['home/auth']);
  }
  signOut() {
   
    this.router.navigate(['home/auth']);
  }
}
