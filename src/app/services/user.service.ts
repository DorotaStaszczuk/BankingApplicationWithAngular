import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userData = new BehaviorSubject(null);
    constructor(private authService: AuthService) {}

    getUserData() {
        return firebase
            .database()
            .ref('/users/qCpFDb8knKQN99L9NQTU0BvNgYX2/profile')
            .once('value')
            .then(snapshot => {
                this.userData = (snapshot.val() && snapshot.val().name) || 'Anonymous';
                // console.log('snapshot val name', snapshot.val().name);
            });
    }
}
