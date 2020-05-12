import { Component, OnInit } from '@angular/core';
import { ModalVisibilityService } from 'src/app/services/modal-visibility.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    constructor(public modalVisibilityService: ModalVisibilityService) {}

    ngOnInit() {}

    openTransfer() {
        this.modalVisibilityService.isVisibleTransfer = true;
    }
}
