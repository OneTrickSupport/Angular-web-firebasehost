import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})
export class HemComponent implements OnInit {
isLoggedIn: boolean;
loggedInUser: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
onLogoutClick(){
    this.authService.logout();
}
}
