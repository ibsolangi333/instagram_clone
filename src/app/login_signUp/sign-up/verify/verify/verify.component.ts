import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  verifyForm!: FormGroup;
  submitted:boolean = false;

  constructor(private verifyFormBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.verifyForm = this.verifyFormBuilder.group({
      code:['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[0-9]+$')
      ]
    ],
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.verifyForm.invalid){
      return
    }
    else{
      this.router.navigate(['main'])
    }
  }

}
