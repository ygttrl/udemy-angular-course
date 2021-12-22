import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() data : any ;

@Output() resetForm :EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  emitForm(event:any){
    this.resetForm.emit(event);
  }

}
