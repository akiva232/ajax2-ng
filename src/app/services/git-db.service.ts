import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDbService {

  public urlIndwx={
    "txt": "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/say%20ho.txt",
    "js" :"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.js",
    "json":"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json",
    "html" :"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/comp-calc.html"


  }

  constructor(private http:HttpClient) { }

  httpGetTxt(url:string) : Observable<string>{
    
    return  this.http.get(url, {responseType:'text'})
  }

  httpGet(url:string) : Observable<string>{
    
   return  this.http.get<string>(url)
  }
}
