import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuggestedComponent } from './suggested/suggested.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'suggest', component: SuggestedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
