import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';
import {Routes,RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalCertifivateComponent } from './my_document/medical-certifivate/medical-certifivate.component';
import { MedicalCertifivateHIComponent } from './my_document/medical-certifivate-hi/medical-certifivate-hi.component';
import { HomeIsoationHiComponent } from './my_document/home-isoation-hi/home-isoation-hi.component';
import { CommunicableDiseaseComponent } from './my_document/communicable-disease/communicable-disease.component';

const routes:Routes = [
  {path:'OPSI',component:MedicalCertifivateComponent},
  {path:'HI',component:MedicalCertifivateHIComponent},
  {path:'Home-Isolation-Hi',component:HomeIsoationHiComponent},
  {path:'communicable',component:CommunicableDiseaseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MedicalCertifivateComponent,
    MedicalCertifivateHIComponent,
    HomeIsoationHiComponent,
    CommunicableDiseaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
