import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'PhasesPipe'
})
export class PhasesPipe implements PipeTransform {phases:any;
    
    transform(projetList: any, selc?: any): any 
    {
        if (projetList && projetList.length)
        {
            return selc ? projetList.filter(sal => sal.phase_cours === selc) : projetList;
        }
        else
        {
            return projetList;
        }
    }
}