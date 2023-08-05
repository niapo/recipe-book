import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent implements OnInit {
  // signup/login page will not show header
  displayHeader = true;

  setShowHeader(flag: boolean) {
    this.displayHeader = flag;
  }

  constructor(
    private authService: AuthService // private store: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
