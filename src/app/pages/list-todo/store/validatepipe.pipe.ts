import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './type';

@Pipe({
  name: 'validatepipe',
  standalone: true,
})
export class ValidatepipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value);
    return !value || !value.length ? false : (value as TodoItem[]);
  }
}
