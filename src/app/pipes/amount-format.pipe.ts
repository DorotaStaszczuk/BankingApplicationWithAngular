import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'amountFormat'
})
export class AmountFormatPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const fixed = value.toFixed(2);
        const [integer, decimal] = fixed.split('.');
        let num = '';
        for (let i = 0; i < integer.length; i++) {
            if ((integer.length - i) % 3 === 0) {
                num += ' ';
            }
            num += integer[i];
        }
        return num.trim() + ',' + decimal + ' PLN';
    }
}
