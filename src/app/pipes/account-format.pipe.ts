import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'accountFormat'
})
export class AccountFormatPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let accNum = '';
        for (let i = 0; i < value.length; i++) {
            if ((value.length - i) % 4 === 0) {
                accNum += ' ';
            }
            accNum += value[i];
        }
        return accNum.trim();
    }
}
