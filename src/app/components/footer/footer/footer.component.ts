import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public isDesktop: boolean;
    constructor(private mediaService: MediaService) {}

    ngOnInit() {
        this.onResize();
        this.mediaService.checkWidth();
    }

    onResize() {
        this.mediaService.getDesktopStatus().subscribe(isDesktop => {
            this.isDesktop = isDesktop;
        });
    }
}
