import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
    providedIn: 'root'
})
export class TransferService {
    transactions = new BehaviorSubject(null);
    account = new BehaviorSubject(null);
    temp;
    constructor() {}

    getAccountData() {
        firebase
            .database()
            .ref('/users/qCpFDb8knKQN99L9NQTU0BvNgYX2/accounts/mojeKontoPrzekorzystne')
            .once('value')
            .then(snapshot => {
                this.account = snapshot.val();
            });
    }

    getTransfer() {
        firebase
            .database()
            .ref('/users/qCpFDb8knKQN99L9NQTU0BvNgYX2/accounts/mojeKontoPrzekorzystne/transactions')
            .on('value', transactions => {
                this.transactions.next(transactions.val());
            });
    }

    newTransfer(transfer) {
        firebase
            .database()
            .ref('/users/qCpFDb8knKQN99L9NQTU0BvNgYX2/accounts/mojeKontoPrzekorzystne/transactions')
            .push(transfer);
    }

    getTransferData(data) {
        this.temp = data;
    }
}
