import { Router } from '@angular/router';
import 'firebase/auth';
import 'firebase/database';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {}

    onLogin() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.authService.user = true;
                this.router.navigate(['main']);
                console.log('logowanie', this.authService.user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
}
