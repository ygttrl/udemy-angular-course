import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltering'
})
export class MyFilteringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
