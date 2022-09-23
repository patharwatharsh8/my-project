import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css']
})
export class UpdateemployeComponent implements OnInit {
  empdata:employe;
  empid:any={};

  constructor(private empdat:EmployeService,private router:ActivatedRoute,private routers:Router) { }

  ngOnInit(): void {
    this.empid=this.router.snapshot.paramMap.get('empid');
    this.empdata.getviewemploye1(this.empid).subscribe(data=>{
      this.empdata=data;
    }); 
    
    }
  
  updateemployedata(){
this.empdata.updateemploye(this.empid,this.empdata).subscribe(data=>{
      this.routers.navigateByUrl('/empdata')
    })
      
    
  }



}
