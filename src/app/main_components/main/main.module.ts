import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FollowUserComponent } from './notifications/follow-user/follow-user.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    NotificationsComponent,
    FollowUserComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
