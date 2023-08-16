import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpMainRoutingModule } from './sign-up-main-routing.module';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpMainComponent
  ],
  imports: [
    CommonModule,
    SignUpMainRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class SignUpMainModule { }
