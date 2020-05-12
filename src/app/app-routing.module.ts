import { TransfersListComponent } from './transfers/transfers-list/transfers-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LoggedInGuard } from './logged-in.guard';
import { PaymentsComponent } from './transfers/payments/payments.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component: MainComponent, canActivate: [LoggedInGuard] },
    { path: 'payments', component: PaymentsComponent, canActivate: [LoggedInGuard] },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
