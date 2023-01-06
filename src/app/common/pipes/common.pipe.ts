import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberRound'
})
export class NumberRoundPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Number(Math.round(value));
  }
}
