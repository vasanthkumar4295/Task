import { Component, OnInit, } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // forms:FormGroup
  public nameForm:FormGroup;
  public name2form:FormGroup;
  myusername: string = "";
  myuser: string = "";
  
  constructor( private formBuilder: FormBuilder, private router:Router) {
    this.nameForm = this.formBuilder.group({
      EmailId: ''
    });
    this.name2form = this.formBuilder.group({
      Password:''
    })
  }
  clickme() {
    this.myusername=this.nameForm.get('EmailId')?.value;
this.myuser=this.name2form.get('Password')?.value;
    console.log('it does nothing', this.nameForm.get('EmailId'));
    console.log('it does nothing', this.name2form.get('Password'));

    var raja =this.myusername
    var pwd =this.myuser
    console.log(raja)
    console.log(pwd)
    var getEmail= (localStorage.getItem('Users'));
    
     
     var getpwd =(localStorage.getItem('Users'));
    console.log("USER ENTERED email",raja )
    console.log("USER ENTERED password", pwd)
    console.log("LOCAL STORAGE email",getEmail )
    console.log("LOCAL STORAGEPARSED email",JSON.parse(getEmail || "") )
    console.log("LS PARSED password",JSON.parse(getpwd || "") )
let user = JSON.parse(getEmail || "")
  let email = user.Username
  let user1 =JSON.parse(getpwd || "")
  let password = user.Password
  console.log("password:",password )
  
  console.log("password:",pwd )
 
    if( email === raja){
    console.log("EMAIL ID IS CORRECT")
      if(password  === pwd){

         this.router.navigate(['/home'])

      }
      else{
        alert("wrong password")
      }
      
    }
    else{
      alert("Invalid details")
    }
  }
  }

    
  
  
  
