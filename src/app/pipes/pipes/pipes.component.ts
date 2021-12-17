import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title="aNkaRa türKiYEnin başkenTidir!";
  turkishUpperCaseVal:string="";
  today:string="";
  cashValue=14343.344;
  percentValue=324232.56;
  oobjectVal: Object={
    foo:"bar",
    baz:"qux",
    nested :{xyz:3,numbers:[1,2,3,4,5]}
  }
  cityValue:string="istanbul";
  cash:string="1500";

  cities=[
    "istanbul","izmir","ankara","edirne","antalya","samsun"
  ]

  constructor() { }

  ngOnInit(): void {
      this.turkishUpperCaseVal = this.title.toLocaleUpperCase("tr-TR");
      this.today= new Date().toDateString();
  }

}
