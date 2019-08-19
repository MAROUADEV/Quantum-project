import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
    transform(projetList: any, titleSearch: string)
    {
        if (projetList && projetList.length)
        {
            return projetList.filter(projetList =>
            {
                if (titleSearch && projetList.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1)
                {
                    return false;
                }
              
                return true;
           })
        }
        else
        {
            return projetList;
        }
    }
}