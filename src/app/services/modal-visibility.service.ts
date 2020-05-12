import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModalVisibilityService {
    isVisibleTransfer = false;
    isVisibleSms = false;
    isVisibleModal = false;

    constructor() {}
}
