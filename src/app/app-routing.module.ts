import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CultureComponent } from './pages/culturebenefits/culture.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'contact', component: ContactComponent},
  { path:'culture', component: CultureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
