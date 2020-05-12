import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, FormsModule],
    exports: [ButtonComponent, FormsModule]
})
export class UniversalModule {}
