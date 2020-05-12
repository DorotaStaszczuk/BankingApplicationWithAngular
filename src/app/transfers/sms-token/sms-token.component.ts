import { TransferService } from 'src/app/services/transfer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalVisibilityService } from 'src/app/services/modal-visibility.service';

@Component({
    selector: 'app-sms-token',
    templateUrl: './sms-token.component.html',
    styleUrls: ['./sms-token.component.scss']
})
export class SmsTokenComponent implements OnInit {
    token = '1234';
    @ViewChild('form', {
        static: true
    })
    smsForm;
    constructor(public modalVisibilityService: ModalVisibilityService, private transferService: TransferService) {}

    ngOnInit() {}

    close() {
        if (this.smsForm.dirty) {
            this.modalVisibilityService.isVisibleSms = !confirm('Czy na pewno chcesz anulować operację?');
        } else {
            this.modalVisibilityService.isVisibleSms = false;
        }
    }

    onSubmit(smsForm: NgForm) {
        if (smsForm.value.smsToken === this.token) {
            this.modalVisibilityService.isVisibleSms = false;
            this.modalVisibilityService.isVisibleModal = true;
            this.transferService.newTransfer(this.transferService.temp);
            smsForm.reset();
        }
    }
}
