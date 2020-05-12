import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersListComponent } from './transfers-list/transfers-list.component';
import { SmsTokenComponent } from './sms-token/sms-token.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferModalComponent } from './transfer-modal/transfer-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { FailureModalComponent } from './failure-modal/failure-modal.component';
import { AmountFormatPipe } from '../pipes/amount-format.pipe';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
    declarations: [
        TransfersListComponent,
        SmsTokenComponent,
        TransferModalComponent,
        SuccessModalComponent,
        FailureModalComponent,
        AmountFormatPipe,
        PaymentsComponent
    ],
    imports: [CommonModule, AppRoutingModule, FormsModule],
    exports: [TransfersListComponent, TransferModalComponent, SmsTokenComponent, SuccessModalComponent]
})
export class TransfersModule {}
