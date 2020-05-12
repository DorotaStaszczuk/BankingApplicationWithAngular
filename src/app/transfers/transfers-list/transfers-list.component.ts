import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { Observable } from 'rxjs';
import { MediaService } from 'src/app/services/media.service';

@Component({
    selector: 'app-transfers-list',
    templateUrl: './transfers-list.component.html',
    styleUrls: ['./transfers-list.component.scss']
})
export class TransfersListComponent implements OnInit {
    transfers: Observable<any>;
    public isMobile: boolean;
    items = 10;

    constructor(
        public transferService: TransferService,
        private mediaService: MediaService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.onResize();
        this.mediaService.checkWidth();
        this.transferService.getTransfer();
        this.transfers = this.transferService.transactions.pipe(
            map(transactions => {
                const arr = [];
                for (let key in transactions) {
                    arr.push(transactions[key]);
                }
                arr.sort((a, b) => {
                    return b.date - a.date;
                });
                if (this.activatedRoute.snapshot.url[0].path === 'main') {
                    return arr.slice(0, 4);
                } else {
                    return arr;
                }
            })
        );
    }
    onResize() {
        this.mediaService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
        });
    }

    showMore() {
        if (this.activatedRoute.snapshot.url[0].path === 'payments') {
            this.items = this.items + 10;
        } else {
            this.router.navigate(['payments']);
        }
    }
}
