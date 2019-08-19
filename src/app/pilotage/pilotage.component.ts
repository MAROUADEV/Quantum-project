import { Globals } from './../globals';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FilterPipe} from './pipe';
import { SelectPipe } from './pipeselect';
import {PhasesPipe} from './pipephase';




@Component({
  selector: 'app-pilotage',
  templateUrl: './pilotage.component.html'
})
export class PilotageComponent 
{
    
    projetList:any;

    show = false;

    showlist:any;

    showlivrable1:any;


    
    constructor(private globals: Globals,private route: Router) 
    {
        this.filterdata =[];
        this.showlist={};
        this.showlivrable1={};
        this.projetList=
        [
            {
                title: "Titre du projet 01",
                dateDebut: "2015-02-12",
                dateFin: " 2016-11-22",
                img: "./assets/img/projet_1.jpg",
                filliale: "BMCE capital",
                doc_fiche_projet: "../pdf/test_pdf.pdf",
                responsable: "Resposable projet",
                taille_fiche_projet: "pdf 4.06 Mo",
                objectif: "Lorem ipsum dolor sit amet",
                type_projet: "Organisation",
                domaine: "Domaine fonctionnel 01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                phase_cours:"demarrage",
                phases: [{
                    libelle: "demarrage",
                    code: "demarrage",
                    img:"./assets/img/icons/icon_demarrage.png",
                    phaseColor: "color_yellow",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                },{
                    libelle: "planification",
                    code: "planification",
                    img:"./assets/img/icons/icon_planif.png",
                    phaseColor: "color_cyan",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "exécution",
                    code: "execution",
                    img:"./assets/img/icons/icon_execution.png",
                    phaseColor: "color_orange",
                    du: "03 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Suivi",
                    code: "suivi",
                    img:"./assets/img/icons/icon_suivi.png",
                    phaseColor: "color_pink",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Clôture",
                    code: "cloture",
                    img:"assets/img/icons/icon_cloture.png",
                    phaseColor: "color_pistach",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Bilan d’efficacité",
                    code: "bilan",
                    img:"./assets/img/icons/icon_bilan.png",
                    phaseColor: "color_green",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }],
                livrablesDemmarage: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesPlanification: [{
                    title: "Livrable 04",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 05",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 06",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesExecution: [{
                    title: "Livrable 07",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 09",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 10",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesSuivi: [{
                    title: "Livrable 11",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 12",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 13",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesCloture: [{
                    title: "Livrable 14",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 15",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 16",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesBilan: [{
                    title: "Livrable 17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 18",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 19",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]
            },
            {
                title: "Titre du projet 02",
                dateDebut: "2012-10-22",
                dateFin: "2014-12-19",
                img: "./assets/img/projet_2.jpg",
                filliale: "BMCE capital",
                doc_fiche_projet: "../pdf/test_pdf.pdf",
                responsable: "Resposable projet",
                taille_fiche_projet: "(pdf 4.06 Mo)",
                objectif: "Lorem ipsum dolor sit amet",
                type_projet: "Organisation",
                domaine: "Domaine fonctionnel 01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                phase_cours:"planification",
                phases: [{
                    libelle: "demarrage",
                    code: "demarrage",
                    img:"./assets/img/icons/icon_demarrage.png",
                    phaseColor: "color_yellow",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "planification",
                    code: "planification",
                    img:"./assets/img/icons/icon_planif.png",
                    phaseColor: "color_cyan",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "exécution",
                    code: "execution",
                    img:"./assets/img/icons/icon_execution.png",
                    phaseColor: "color_orange",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Suivi",
                    code: "suivi",
                    img:"./assets/img/icons/icon_suivi.png",
                    phaseColor: "color_pink",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Clôture",
                    code: "cloture",
                    img:"./assets/img/icons/icon_cloture.png",
                    phaseColor: "color_pistach",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Bilan d’efficacité",
                    code: "bilan",
                    img:"./assets/img/icons/icon_bilan.png",
                    phaseColor: "color_green",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }],
                livrablesDemmarage: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesPlanification: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesExecution: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesSuivi: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesCloture: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesBilan: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]
            },
            {
                title: "Titre du projet 03",
                dateDebut: "2016-02-20",
                dateFin: "2018-07-30",
                img: "./assets/img/projet_3.jpg",
                filliale: "BMCE capital",
                doc_fiche_projet: "../pdf/test_pdf.pdf",
                responsable: "Resposable projet",
                taille_fiche_projet: "(pdf 4.06 Mo)",
                objectif: "Lorem ipsum dolor sit amet",
                type_projet: "Organisation",
                domaine: "Domaine fonctionnel 01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                phase_cours:"demarrage",
                phases: [{
                    libelle: "demarrage",
                    code: "demarrage",
                    img:"./assets/img/icons/icon_demarrage.png",
                    phaseColor: "color_yellow",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "planification",
                    code: "planification",
                    img:"./assets/img/icons/icon_planif.png",
                    phaseColor: "color_cyan",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "exécution",
                    code: "execution",
                    img:"./assets/img/icons/icon_execution.png",
                    phaseColor: "color_orange",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Suivi",
                    code: "suivi",
                    img:"./assets/img/icons/icon_suivi.png",
                    phaseColor: "color_pink",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Clôture",
                    code: "cloture",
                    img:"./assets/img/icons/icon_cloture.png",
                    phaseColor: "color_pistach",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Bilan d’efficacité",
                    code: "bilan",
                    img:"./assets/img/icons/icon_bilan.png",
                    phaseColor: "color_green",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }],
                livrablesDemmarage: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesPlanification: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesExecution: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesSuivi: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesCloture: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesBilan: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]
            },
            {
                title: "Titre du projet 04",
                dateDebut: "2017-03-24",
                dateFin: "2018-07-12",
                img: "./assets/img/projet_4.jpg",
                filliale: "BMCE capital",
                doc_fiche_projet: "pdf/test_pdf.pdf",
                responsable: "Resposable projet",
                taille_fiche_projet: "(pdf 4.06 Mo)",
                objectif: "Lorem ipsum dolor sit amet",
                type_projet: "Organisation",
                domaine: "Domaine fonctionnel 01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                phase_cours:"Clôture",
                phases: [{
                    libelle: "demarrage",
                    code: "demarrage",
                    img:"./assets/img/icons/icon_demarrage.png",
                    phaseColor: "color_yellow",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "planification",
                    code: "planification",
                    img:"./assets/img/icons/icon_planif.png",
                    phaseColor: "color_cyan",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "exécution",
                    code: "execution",
                    img:"./assets/img/icons/icon_execution.png",
                    phaseColor: "color_orange",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Suivi",
                    code: "suivi",
                    img:"./assets/img/icons/icon_suivi.png",
                    phaseColor: "color_pink",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Clôture",
                    code: "cloture",
                    img:"./assets/img/icons/icon_cloture.png",
                    phaseColor: "color_pistach",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }, {
                    libelle: "Bilan d’efficacité",
                    code: "bilan",
                    img:"./assets/img/icons/icon_bilan.png",
                    phaseColor: "color_green",
                    du: "01 mars 2017",
                    au: "02 avril 2018"
                }],
                livrablesDemmarage: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesPlanification: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesExecution: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesSuivi: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesCloture: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }],
                livrablesBilan: [{
                    title: "Livrable 01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    title: "Livrable 03",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]
            }
        ];

        

    }

    firstdate:Date;
    lastdate:Date;
    filterdata:any;

    dateCheck(fDate:Date,lDate:Date) 
    {
        this.filterdata = []; 
         
        if (this.projetList && this.projetList.length) {  
            this.projetList.forEach((proj: any) => {  
                if (proj.dateDebut >= fDate && proj.dateFin <= lDate) 
                {  
                    this.filterdata.push(proj);  
                }  
            });  
        }  
        return this.filterdata; 
    }


  ngOnInit() 
  {
    /*if (this.globals.user === '' || this.globals.user === null) 
    {
      this.route.navigateByUrl('login/login');
    }*/
    
  }
}
