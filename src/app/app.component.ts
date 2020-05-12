import { MediaService } from './services/media.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public authService: AuthService, private mediaService: MediaService) {}

    ngOnInit() {
        this.onResize();
    }

    onResize() {
        this.mediaService.checkWidth();
    }
}
