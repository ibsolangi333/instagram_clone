import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    SharedModuleModule
  ]
})
export class VerifyModule { }
