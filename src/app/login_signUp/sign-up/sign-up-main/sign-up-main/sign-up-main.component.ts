import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-main',
  templateUrl: './sign-up-main.component.html',
  styleUrls: ['./sign-up-main.component.css']
})


export class SignUpMainComponent {
  signupForm!: FormGroup;
  submitted:boolean = false;
  emailError:boolean = false;
  emailCorrection:boolean =false;

  constructor(private signupFormBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.signupForm = this.signupFormBuilder.group({
      emailOrPhone:['',Validators.required],
      fullname:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true
    if(this.signupForm.invalid){
      return
    }
    else{
      this.router.navigate(['birthdate'])
    }
  }
}
