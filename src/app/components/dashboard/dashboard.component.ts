import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: User;
  constructor(public authService: AuthService) {
    authService.userData.subscribe((res) => {
      console.log(res);
      this.userData = res;
    });
  }

  ngOnInit(): void {
  }

}
