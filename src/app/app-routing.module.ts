import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModule } from './login_signUp/sign-up/sign-up.module';
import { LoginModule } from './login_signUp/login/login.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login_signUp/login/login.module')
    .then(m => LoginModule)
  },
  {
    path: 'signUp',
    loadChildren: () => import('./login_signUp/sign-up/sign-up.module')
    .then(m => SignUpModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
