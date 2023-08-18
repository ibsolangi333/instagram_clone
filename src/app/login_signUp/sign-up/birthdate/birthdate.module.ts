import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdateRoutingModule } from './birthdate-routing.module';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BirthdateComponent
  ],
  imports: [
    CommonModule,
    BirthdateRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class BirthdateModule { }
