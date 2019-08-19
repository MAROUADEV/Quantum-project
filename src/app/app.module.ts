import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.routing'
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PilotageComponent } from './pilotage/pilotage.component';

import {Globals} from './globals'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClientModule , HttpClient} from "@angular/common/http";
import { FilterPipe } from './pilotage/pipe';
import { SelectPipe } from './pilotage/pipeselect';
import { PhasesPipe } from './pilotage/pipephase';

import { DatePipe } from '@angular/common'; 



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,AboutComponent,ContactComponent,PilotageComponent,FilterPipe,
    SelectPipe,PhasesPipe
  ],
  imports: [
    BrowserModule,routes,FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({   
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })  
  ],
  providers: [Globals, {
    provide: LocationStrategy, useClass: HashLocationStrategy
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
