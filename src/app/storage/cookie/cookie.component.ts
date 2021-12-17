import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(private cookieService: CookieService) {

  }
  name="";
  cookieValue="";
  isCookieExist:boolean=false;

  ngOnInit(): void {
  }

  setItem(value:any){
    this.cookieService.set('name',value)
  }
  getItem(){
    this.cookieValue=this.cookieService.get("name");
  }
  clearItem(){
    this.cookieService.delete("name");
    this.getItem();
  }
  clearAll(){
    this.cookieService.deleteAll("name");
  }

  checkNameCookie(){
    this.isCookieExist =this.cookieService.check("name");
  }

}
