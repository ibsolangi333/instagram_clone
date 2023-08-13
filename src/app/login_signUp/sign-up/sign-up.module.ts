import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { BirthdateComponent } from './birthdate/birthdate.component';




@NgModule({
  declarations: [
    SingUpComponent,
    BirthdateComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModuleModule
  ],
})
export class SignUpModule { }
