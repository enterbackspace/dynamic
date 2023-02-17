import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient) { }
  addDetails(data:any){
    return this.http.post("http://localhost:3000/Details",data)
  }



  updatedetails(id:number,data:any):Observable<any>{
  return  this.http.put(`http://localhost:3000/Details/${id}`,data)
  }
}
