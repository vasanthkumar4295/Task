import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
    console.log('inside theitem',this.item)
    this.addNewItem()
    
  }

 addNewItem() {
    console.log('inside the addnewitem')
    this.newItemEvent.emit(' child component');
  }
  

}
