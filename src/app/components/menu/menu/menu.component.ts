import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router, public userService: UserService) {}

    ngOnInit() {}

    onLogout() {
        firebase.auth().signOut();
        this.authService.user = false;
        this.router.navigate(['']);
    }
}
