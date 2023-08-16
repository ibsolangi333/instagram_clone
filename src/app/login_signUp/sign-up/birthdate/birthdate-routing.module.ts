import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdateComponent } from './birthdate/birthdate.component';

const routes: Routes = [
  {
    path:'', component: BirthdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdateRoutingModule { }
