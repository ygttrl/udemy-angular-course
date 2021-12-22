import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  name="";
  successStatus=0;

  calculateData:any;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.calculateData={
      name:this.name,
      statu: this.successStatus
    }
  }
  resetParentForm(){
    this.name="resetlendi...";
    this.successStatus=0;
  }

}
