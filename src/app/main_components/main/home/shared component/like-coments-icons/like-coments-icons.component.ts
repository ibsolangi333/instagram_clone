import { Component } from '@angular/core';

@Component({
  selector: 'app-like-coments-icons',
  templateUrl: './like-coments-icons.component.html',
  styleUrls: ['./like-coments-icons.component.css']
})
export class LikeComentsIconsComponent {
  liked=true;
  unliked=false;
  saved=true;
  unsaved=false

  // like functionilty
  like(){
    this.liked=false;
    this.unliked=true
  }
  unlike(){
    this.liked=true;
    this.unliked=false
  }

  // save functionilty
  save(){
    this.saved=false;
    this.unsaved=true;
  }
  unsave(){
    this.saved=true;
    this.unsaved=false;
  }
}
