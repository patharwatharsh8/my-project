import { Injectable } from '@angular/core';
import { employe } from './employe';
import {HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  public employee1:employe[]=[];
  Addempdata(empl:employe){
    return this.http.post<any>('http://localhost:3000/profile',empl);
  }
  getviewemploye(empid:number){
     return this.http.get<any>('http://localhost:3000/profile'+empid);
  }
  getviewemploye1(empid:number){
    return this.http.get<any>('http://localhost:3000/profile'+empid);
  }
  updateemployee(empid:number,xyz:employe){
    return this.http.put<any>('http://localhost:3000/profile'+empid,xyz);
  }
  constructor(private http:HttpClient) { }
  getemploye(){
    return this.http.get<any>('http://localhost:3000/profile');
  }
  deleteemp(id:any){
    return this.http.delete<any>('http://localhost:3000/profile/'+id);
  }
}
