import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalVisibilityService } from 'src/app/services/modal-visibility.service';

@Component({
    selector: 'app-success-modal',
    templateUrl: './success-modal.component.html',
    styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
    constructor(private router: Router, public modalVisibilityService: ModalVisibilityService) {}

    ngOnInit() {}
    closeModal() {
        this.modalVisibilityService.isVisibleModal = false;
    }
}
