import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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
