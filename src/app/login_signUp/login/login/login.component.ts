import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted:boolean = false;
  formError:boolean = false
  constructor(private loginFormBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.loginForm = this.loginFormBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }


  onSubmit(){
    this.submitted=true
    if(
      this.loginForm.controls['username'].invalid 
      || 
      this.loginForm.controls['username'].value != 'user@gmail.com'
      ||
      this.loginForm.controls['password'].invalid 
      || 
      this.loginForm.controls['password'].value != 'user123'
      )
    {
      this.formError = true 
    }
    else{
      this.router.navigate(['/main'])
    }
  };
}
