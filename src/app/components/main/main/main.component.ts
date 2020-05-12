import { ModalVisibilityService } from './../../../services/modal-visibility.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(public modalVisibilityService: ModalVisibilityService) {}

    ngOnInit() {}
}
