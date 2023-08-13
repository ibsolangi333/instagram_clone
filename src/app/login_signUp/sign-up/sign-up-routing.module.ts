import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { BirthdateComponent } from './birthdate/birthdate.component';

const routes: Routes = [
  {
    path:'', component: SingUpComponent
  },
  {
    path:'birthdate', component: BirthdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
