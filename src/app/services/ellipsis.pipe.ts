
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        if (value.length >= 83) {
            return value.slice(0, 83) + '...';
        }
        return value;
    }
}
