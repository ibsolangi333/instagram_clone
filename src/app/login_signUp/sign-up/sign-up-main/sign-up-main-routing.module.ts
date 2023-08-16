import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';

const routes: Routes = [
  {
    path:'', component: SignUpMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpMainRoutingModule { }
