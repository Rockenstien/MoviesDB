import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCut'
})
export class WordCutPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 47)
      return value.substr(0, 47) + "...";
    else
      return value;
  }

}
