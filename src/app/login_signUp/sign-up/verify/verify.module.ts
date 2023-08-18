import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class VerifyModule { }
