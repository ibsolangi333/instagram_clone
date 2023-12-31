import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path:'', component: MainComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module')
        .then(m => HomeModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
