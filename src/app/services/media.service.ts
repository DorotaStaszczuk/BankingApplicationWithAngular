import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MediaService {
    private isMobile = new Subject();
    private isDesktop = new Subject();

    public screenWidth: string;
    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    onDesktopChange(status: boolean) {
        this.isDesktop.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    getDesktopStatus(): Observable<any> {
        return this.isDesktop.asObservable();
    }

    public checkWidth() {
        const width = window.innerWidth;
        if (width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
            this.onDesktopChange(false);
        } else if (width > 768 && width <= 1352) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
            this.onDesktopChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
            this.onDesktopChange(true);
        }
    }
}
