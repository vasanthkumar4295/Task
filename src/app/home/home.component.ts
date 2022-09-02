import { Component, OnInit } from '@angular/core';
import { AuthguadService } from '../authguad.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:number
  title:string
  price:number
  p: number = 1;
  brand:string
  formdata:FormGroup;
  filteredUsers: any[];
  totalLength:any;
  filterBy:any;
arrData:any;
currentItem = 'Television';

  constructor(private route:Router,private dataservice: AuthguadService,private router:Router) { }


pagenumber=1;
  ngOnInit(): void {
    this.dataservice.myData().subscribe((Response:any) => {
     console.log(Response)
      this.arrData = Response.products
      this.totalLength=Response.Length;
      
      
      
   }); 
   this.formdata=new FormGroup({
    title:new FormControl (""),
    id:new FormControl(),
  
   });
  }
  home(data:any){
    console.log(data)
    
    
    this.formdata.setValue({
      title: data.title,
      id: data.id});
   // this.router.navigate(['/dashboard'])
  }
 
 
}
