import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { PostOneComponent } from './post-one/post-one.component';


@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
    SuggestedComponent,
    PostOneComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
