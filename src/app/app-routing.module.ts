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
const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'contact', component: ContactComponent},
  { path:'culture', component: CultureComponent},
  {path: 'career', component: CareerComponent},
  { path: 'fullstack', component: FullstackComponent},
  {path:'meanstack', component: MeanstackComponent},
  {path: 'medann', component: MedannComponent},
  {path:'softeng', component: SoftengComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
