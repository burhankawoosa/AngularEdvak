import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CultureComponent } from './pages/culturebenefits/culture.component';
import { CareerComponent } from './pages/career/career.component';
import { FullstackComponent } from './pages/career/fullstack/fullstack.component';
import { MeanstackComponent } from './pages/career/meanstack/meanstack.component';
import { MedannComponent } from './pages/career/medann/medann.component';
import { SoftengComponent } from './pages/career/softeng/softeng.component';
import { EhrComponent } from './pages/EHR/ehr/ehr.component';
import { TelehealthComponent } from './pages/telehealth/telehealth/telehealth.component';
import { AboutComponent } from './pages/about/about/about.component';
import { DarwinComponent } from './pages/darwin/darwin/darwin.component';
import { RcmComponent } from './pages/RCM/rcm/rcm.component';
import { PatientportalComponent } from './pages/patientportal/patientportal/patientportal.component';
import { PracticemanagmentComponent } from './pages/practicemanagment/practicemanagment/practicemanagment.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'contact', component: ContactComponent},
  { path:'culture', component: CultureComponent},
  {path: 'career', component: CareerComponent},
  { path: 'fullstack', component: FullstackComponent},
  {path:'meanstack', component: MeanstackComponent},
  {path: 'medann', component: MedannComponent},
  {path:'softeng', component: SoftengComponent},
  {path:'ehr', component:EhrComponent},
  {path:'telehealth', component:TelehealthComponent},
  {path:'about', component: AboutComponent},
  {path:'darwin', component: DarwinComponent},
  {path: 'rcm' , component: RcmComponent},
  {path:'patientportal', component:PatientportalComponent},
  {path: 'practicemanagment', component: PracticemanagmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled', anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
