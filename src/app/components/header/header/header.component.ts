import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('products', { static: true }) products: ElementRef;
    @ViewChild('payment', { static: true }) payment: ElementRef;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe((event: NavigationStart) => {
                if (event.url === '/payments') {
                    this.products.nativeElement.classList.remove('active');
                    this.payment.nativeElement.classList.add('active');
                } else {
                    this.products.nativeElement.classList.add('active');
                    this.payment.nativeElement.classList.remove('active');
                }
            });
    }
}
