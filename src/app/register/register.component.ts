import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,  AbstractControl } from'@angular/forms'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:any ={};
  formdata:FormGroup;
  constructor(private router:Router,private activateRouter:ActivatedRoute,private fb:FormBuilder  ) { 
    }
// register(){
//   this.router.navigate(['/login'])
//  }
 
 
ngOnInit(): void {
    this.formdata=new FormGroup({
      'Username':new FormControl(null,[Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'Password':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      
    });
   
  }
onsubmit(){
  console.log(this.formdata.value);
  this.user = Object.assign(this.user, this.formdata.value);
  localStorage.setItem('Users',JSON.stringify (this.user));
  this.router.navigate(['/login'])
}

 
}
