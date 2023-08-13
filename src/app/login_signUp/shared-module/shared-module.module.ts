import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAppComponent } from './get-app/get-app.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    GetAppComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetAppComponent,
    FooterComponent
  ]
})
export class SharedModuleModule { }
