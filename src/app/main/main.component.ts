import { Component, OnInit, TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {  Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, observable, Subject } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showFlag=false;
  arrData:any;
   editData:{}
   modalRef: BsModalRef;
   currentItem:any;
   id:number
   
   title:string
   formdata:FormGroup
   subject$ = new Subject();

  constructor(private dataservice:CommonserviceService,private modalService: BsModalService,
    private route:Router,private router:Router) {
      
     }

     
   ngOnInit(): void {
    this.dataservice.myData().subscribe(Response=>{
    this.arrData = Response
    // here edit value
    
    });
    this.formdata=new FormGroup({
      title:new FormControl (""),
      id:new FormControl(),
    
     });
    localStorage.setItem('SeesionUser','vasanth') 
    this.currentItem="hello world"

   
    this.subject$.next(console.log)
  }
  openModal(data:any) {
    console.log(data)
    
    
    this.formdata.setValue({
      title: data.title,
      id: data.id

    });
   // this.id=data.id;
    //this.title=data.title;
    
    }
 
 
showStyle(){  
    this.showFlag=true;  
}


  
  onClickSubmit(updatedData:object) {
   
    console.log('inside the data',updatedData);
    this.dataservice.updateData(updatedData).subscribe({
      next: (result => {
         console.log(result)
      })
    })
    this.modalService.hide()
  }
  
  
  addItem(data:any){
    console.log('data come from ',data)
  }
  
  }
