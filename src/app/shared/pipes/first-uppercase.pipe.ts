import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      return value[0].toUpperCase() + value.slice(1,value.length).toLowerCase();
    }
    return value;
  }
}
