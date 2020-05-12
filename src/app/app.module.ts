import { TransfersModule } from './transfers/transfers.module';
import { LoginModule } from './login/login.module';
import { UniversalModule } from './universal/universal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MainComponent } from './components/main/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { AsideBlueComponent } from './components/aside-blue/aside-blue/aside-blue.component';
import { AsideComponent } from './components/aside/aside/aside.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountFormatPipe } from './pipes/account-format.pipe';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';

registerLocaleData(localePL, 'pl');
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        MainComponent,
        ArticleComponent,
        AsideBlueComponent,
        AsideComponent,
        NotFoundComponent,
        AccountFormatPipe,
        AccountInfoComponent
    ],
    imports: [BrowserModule, LoginModule, AppRoutingModule, UniversalModule, TransfersModule],
    exports: [HeaderComponent, FooterComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
