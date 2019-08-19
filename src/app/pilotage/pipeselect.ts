import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'selectfilter'
})
export class SelectPipe implements PipeTransform {

    transform(projetList: any, sel?: any): any 
    {
        if (projetList && projetList.length)
        {
            return sel ? projetList.filter(sal => sal.title === sel) : projetList;
        }
        else
        {
            return projetList;
        }
    }
}