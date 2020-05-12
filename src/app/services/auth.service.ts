import { Injectable } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public user;

    constructor(public authService: AuthService) {
        this.firebaseInit();
    }

    firebaseInit() {
        const config = {
            apiKey: 'AIzaSyBt5nfRWO0qjjgGAN4C_woGDEhs4b3IMHc',
            databaseURL: 'https://pekao-base.firebaseio.com/'
        };

        firebase.initializeApp(config);
        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged(firebaseUser => {
            this.user = firebaseUser;
        });
    }
}
