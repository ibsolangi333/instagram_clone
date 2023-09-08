import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // all properties
  logoImage:boolean = true;
  logoIcon:boolean = false;
  LinkNameHeading:boolean = true;
  searchBarDisplay:string ="-405px";
  notificationsBarDisplay="-405px"
  
  // instagram logo function
  instagramLogo(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }
   
  // home function
  home(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }

  // search function
  search(){
    // image logo
    if(this.logoImage=true){
      this.logoImage=false
    }
    else{
      this.logoImage=true
    }
    // icon logo
    if(this.logoIcon==false){
      this.logoIcon=true
    }
    else{
      this.logoIcon=false
      this.logoImage=true
    }
    // search bar display
    if(this.searchBarDisplay =="-405px"){
      this.searchBarDisplay="85px"
    }
    else{
      this.searchBarDisplay="-405px"
    };
    this.notificationsBarDisplay="-405px";
    // link heading
    if(this.LinkNameHeading == true){
      this.LinkNameHeading=false
    }
    else if(this.searchBarDisplay=="85px"){
      this.LinkNameHeading=false
      this.logoImage=false
      this.logoIcon=true
    }
    else{
      this.LinkNameHeading=true
    }
  }
  // explore function
  explore(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }

  // reels function
  reels(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }

  // messages function
  messages(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }

  // notifications function
  notifications(){
    // image logo
    if(this.logoImage=true){
      this.logoImage=false
    }
    else{
      this.logoImage=true
    }
    // icon logo
    if(this.logoIcon==false){
      this.logoIcon=true
    }
    else{
      this.logoIcon=false
      this.logoImage=true
    }
    // notifications bar display
    if(this.notificationsBarDisplay =="-405px"){
      this.notificationsBarDisplay="85px"
    }
    else{
      this.notificationsBarDisplay="-405px"
    }
    this.searchBarDisplay="-405px"
    // link heading
    if(this.LinkNameHeading == true){
      this.LinkNameHeading=false
    }
    else if(this.notificationsBarDisplay=="85px"){
      this.LinkNameHeading=false
      this.logoImage=false
      this.logoIcon=true
    }
    else{
      this.LinkNameHeading=true
    }      
  }

  // create function
  create(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px"
  }

  // profile function
  profile(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px";
  }

  // more function
  more(){
    this.LinkNameHeading=true;
    this.searchBarDisplay="-405px";
    this.logoImage=true;
    this.logoIcon=false;
    this.notificationsBarDisplay="-405px"
  }
}