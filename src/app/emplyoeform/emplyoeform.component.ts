import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-emplyoeform',
  templateUrl: './emplyoeform.component.html',
  styleUrls: ['./emplyoeform.component.css']
})
export class EmplyoeformComponent implements OnInit {
  id=Math.random();
  public fname1="";
  public lname1="";
  public address1="";
  public mobile1="";
  
  
  constructor(private empdata:EmployeService,private activerouter:Router) { }

  ngOnInit(): void {
  }
  Addempdata(){
    let emp:employe={
      fname: this.fname1, lname: this.lname1, address: this.address1, contact: this.mobile1, id: this.id,
      getviewemploye: function (empid: any): unknown {
        throw new Error('Function not implemented.');
      }
    }
    this.empdata.Addempdata(emp).subscribe(data=>{
      this.activerouter.navigateByUrl("/empdata");
    });
  }

}
