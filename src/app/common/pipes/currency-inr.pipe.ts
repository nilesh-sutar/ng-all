import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "currencyINR"
})
export class INRCurrencyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      var currencySymbol = "₹";
      return (
        (args == false ? '': currencySymbol) +
        Number(value).toLocaleString("en-IN")
      );
    } else {
      return "0";
    }
  }
}
