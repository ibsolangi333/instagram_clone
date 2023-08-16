import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdateRoutingModule } from './birthdate-routing.module';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    BirthdateComponent
  ],
  imports: [
    CommonModule,
    BirthdateRoutingModule,
    SharedModuleModule
  ]
})
export class BirthdateModule { }
