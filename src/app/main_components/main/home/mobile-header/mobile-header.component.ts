import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent {
  searcIcon:boolean = true;
  closeIcon:boolean = false;
  hideIcons(){
    this.searcIcon=false;
    this.closeIcon=true;
  }
  removeSearchContent(){
    this.searcIcon=true;
    this.closeIcon=false;
  }

}
