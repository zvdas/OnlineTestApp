import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber'
})
export class StringToNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var numeric = Number(value);
    return numeric;
  }

}
