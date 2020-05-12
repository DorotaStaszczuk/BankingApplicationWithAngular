import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalVisibilityService } from 'src/app/services/modal-visibility.service';
import { TransferService } from 'src/app/services/transfer.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
    selector: 'app-transfer-modal',
    templateUrl: './transfer-modal.component.html',
    styleUrls: ['./transfer-modal.component.scss']
})
export class TransferModalComponent {
    @ViewChild('transferForm', {
        static: true
    })
    form;
    transferForm;
    transferFormValue;

    public isMobile: boolean;
    constructor(
        private router: Router,
        public modalVisibilityService: ModalVisibilityService,
        private transferService: TransferService,
        private mediaService: MediaService
    ) {}

    ngOnInit() {
        this.onResize();
        this.mediaService.checkWidth();
    }

    closeTransfer() {
        if (this.form.dirty) {
            this.modalVisibilityService.isVisibleTransfer = !confirm('Czy na pewno chcesz anulować operację?');
        } else {
            this.modalVisibilityService.isVisibleTransfer = false;
        }
    }

    onSubmit(transferForm: NgForm) {
        this.modalVisibilityService.isVisibleTransfer = false;
        this.modalVisibilityService.isVisibleSms = true;
        this.transferFormValue = {
            ...transferForm.value,
            date: new Date().valueOf(),
            cathegory: 'przelew krajowy',
            recipientName: 'Jan Kowalski'
        };
        this.transferService.getTransferData(this.transferFormValue);
        transferForm.reset();
    }

    onResize() {
        this.mediaService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
        });
    }
}
