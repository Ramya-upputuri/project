import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllstudentsService {

  constructor(private _httpClient:HttpClient) { }

  allstudents():Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students");
  }

  allfilter(term:any):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?filter="+term);
  }

  pagedstudents(pagenum:number):Observable<any>{
   return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?limit=5&page="+pagenum)
  }

  sortedstudents(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?sortBy="+column+"&order="+order);
  }

  deletestudents(id:string):Observable<any>{
   return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+id);
  }

  query(queries:any){
    let str="";
    if(queries.filter){
      str += "filter="+queries.filter+"&";
    }
    if(queries.pageNO){
      str += "page="+queries.pageNO+"&";
      str += "limit="+queries.limit+"&";
    }
    if(queries.sortBy){
      str += "sortBy="+queries.sortBy+"&";
    }
    if(queries.order){
      str += "order="+queries.order+"&";
    }
    console.log(queries, str);
  
     return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?"+str);
  }
}
