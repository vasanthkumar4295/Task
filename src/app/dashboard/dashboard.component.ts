import { Component, OnInit ,Input,  EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   @Input() item:any[]=[];
  // @Input() componentTitle: string;
  // @Input()id:number;
  // @Input() title:string;
  // @Input() price:number;
  // @Input()brand:string;
  // @Input() arrData='';
  // @Output() newItemEvent = new EventEmitter<string>();
  
  // @Input() childpost:any[]=[];
  // id:any;
  // title:any;
  // brand:any;

  constructor() { }
  ngOnInit(): void {
     console.log('inside theitem',this.item)
    // console.log('inside the childcomponent',this.childpost)
    
    this.addNewItem()
    
  }

 addNewItem() {
    console.log('inside the addnewitem')
    // this.newItemEvent.emit(' child component');
  }
  

}
