import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login_signUp/login/login.module';
import { SignUpMainModule } from './login_signUp/sign-up/sign-up-main/sign-up-main.module';
import { BirthdateModule } from './login_signUp/sign-up/birthdate/birthdate.module';
import { VerifyModule } from './login_signUp/sign-up/verify/verify.module';
import { MainModule } from './main_components/main/main.module';

const routes: Routes = [
  // authentication start
  {
    path: '',
    loadChildren: () => import('./login_signUp/login/login.module')
    .then(m => LoginModule)
  },
  {
    path: 'signUp',
    loadChildren: () => import('./login_signUp/sign-up/sign-up-main/sign-up-main.module')
    .then(m => SignUpMainModule)
  },
  {
    path: 'birthdate',
    loadChildren: () => import('./login_signUp//sign-up/birthdate/birthdate.module')
    .then(m => BirthdateModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./login_signUp//sign-up/verify/verify.module')
    .then(m => VerifyModule)
  },
  // authentication end
  
  {
    path: 'main',
    loadChildren: () => import('./main_components/main/main.module')
    .then(m => MainModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
