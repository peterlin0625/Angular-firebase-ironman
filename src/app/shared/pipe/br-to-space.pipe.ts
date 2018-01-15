import { Pipe, PipeTransform } from '@angular/core';
import { StringHandler } from '../ts/data/string.handler';

@Pipe({
  name: 'brToSpace'
})
export class BrToSpacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new StringHandler(value)
      .brToSpace()
      .toString();
  }

}
