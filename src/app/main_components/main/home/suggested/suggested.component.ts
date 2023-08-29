import { Component } from '@angular/core';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent {
  Follow ="Follow"
  followFun(){
    if(this.Follow == "Follow"){
      this.Follow="Following"
    }
    else if(this.Follow == "Following"){
      this.Follow="Follow"
    }
  }
}
