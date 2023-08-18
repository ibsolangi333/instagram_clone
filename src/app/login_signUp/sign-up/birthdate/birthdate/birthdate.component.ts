import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent {
  mydate = new Date();
  birthdateForm!: FormGroup; 
  submitted:boolean = false;
  select:boolean = true

  constructor(private birthdateFormBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.birthdateForm = this.birthdateFormBuilder.group({
      month:['',Validators.required],
      day:['',Validators.required],
      year:['',Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.birthdateForm.invalid){
      return
    }
    else{
      this.router.navigate(['verify'])
    }
  }

}
