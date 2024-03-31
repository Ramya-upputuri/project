import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestudentService {

  constructor(private _httpClient:HttpClient) { }

  Create_student(data:any):Observable<any>{
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/Students",data)
  }
}
