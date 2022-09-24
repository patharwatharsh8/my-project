import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { employe } from '../employe';

@Component({
  selector: 'app-emplyoedata',
  templateUrl: './emplyoedata.component.html',
  styleUrls: ['./emplyoedata.component.css']
})
export class EmplyoedataComponent implements OnInit {
  employes:employe[]=[];

  constructor(private empdata:EmployeService) { }

  ngOnInit(): void {
    this.empdata.getemploye().subscribe(data=>{
      this.employes=data;
    })
  }
  deleteemploye(empid:any){
   this.empdata.deleteemp(empid).subscribe(data=>{
    this.empdata.getemploye().subscribe(data=>{
      this.employes=data;
    });
 
   });
   
  }

}
