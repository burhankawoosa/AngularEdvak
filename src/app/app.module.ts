import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CultureComponent } from './pages/culturebenefits/culture.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MobmenuComponent } from './shared-components/mobmenu/mobmenu.component';
import { CareerComponent } from './pages/career/career.component';
import { FullstackComponent } from './pages/career/fullstack/fullstack.component';
import { MeanstackComponent } from './pages/career/meanstack/meanstack.component';
import { SoftengComponent } from './pages/career/softeng/softeng.component';
import { MedannComponent } from './pages/career/medann/medann.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EhrComponent } from './pages/EHR/ehr/ehr.component';
import { TelehealthComponent } from './pages/telehealth/telehealth/telehealth.component';
import { AboutComponent } from './pages/about/about/about.component';
import { DarwinComponent } from './pages/darwin/darwin/darwin.component';
import { RcmComponent } from './pages/RCM/rcm/rcm.component';
import { PatientportalComponent } from './pages/patientportal/patientportal/patientportal.component';
import { PracticemanagmentComponent } from './pages/practicemanagment/practicemanagment/practicemanagment.component';

import { NgParticlesModule } from "ng-particles";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CultureComponent,
    MobmenuComponent,
    CareerComponent,
    FullstackComponent,
    MeanstackComponent,
    SoftengComponent,
    MedannComponent,
    EhrComponent,
    TelehealthComponent,
    AboutComponent,
    DarwinComponent,
    RcmComponent,
    PatientportalComponent,
    PracticemanagmentComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    SlickCarouselModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    NgParticlesModule
 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
