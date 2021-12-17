import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  name="";
  localStorageVal:any="";
  localStorageObjVal:any="";

  objName="";
  objSurName="";
  objAge="";

  constructor() { }

  ngOnInit(): void {
  }

  setItem(value:any){
    localStorage.setItem("name",value);
  }
  getItem(){
    this.localStorageVal = localStorage.getItem("name");
  }
  clearItem(){
    localStorage.removeItem("name");
  }

  clearAll(){
    localStorage.clear();
  }

  setObj(){
    const obj ={ name:this.objName,surname:this.objSurName,age:this.objAge };
    localStorage.setItem("object",JSON.stringify(obj))
  }
  getObj(){
      this.localStorageObjVal = localStorage.getItem("object");
  }

}
