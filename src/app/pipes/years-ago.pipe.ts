import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'YearsAgo'
})
export class YearsAgoPipe implements PipeTransform {

  transform(value: string): string {
    const valueToArray = value.split('-');
    const birthYear = parseInt(valueToArray[0]);
    const birthMonth = parseInt(valueToArray[1]);
    const age = (new Date().getFullYear() - birthYear) * 12 - birthMonth;
    return Math.floor(age / 12) + ' years old';
  }

}
