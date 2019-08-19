import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from "@angular/http";
import { Component } from '@angular/core/src/metadata/directives';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PilotageComponent } from './pilotage/pilotage.component';

const appRoutes: Routes = [
     {
        path:'login/login',
        component:LoginComponent

    },
    {
        path:'',
        component:HomeComponent

    },
    {
        path:'home',
        component:HomeComponent

    },
    {
        path:'register',
        component:RegisterComponent

    },
    {
        path:'aboutus',
        component:AboutComponent

    },
    {
        path:'contactus',
        component:ContactComponent

    },
    {
        path:'pilotage',
        component:PilotageComponent

    }

    
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

