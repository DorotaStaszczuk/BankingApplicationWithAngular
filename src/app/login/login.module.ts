import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { UniversalModule } from './../universal/universal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, UniversalModule, LoginRoutingModule],
    exports: [LoginRoutingModule, LoginComponent]
})
export class LoginModule {}
