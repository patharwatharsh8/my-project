import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-viewemploye',
  templateUrl: './viewemploye.component.html',
  styleUrls: ['./viewemploye.component.css']
})
export class ViewemployeComponent implements OnInit {

  constructor(private empdata:EmployeService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let empid:any=this.router.snapshot.paramMap.get('empid');
    this.empdata.getviewemploye(empid).subscribe(data=>{
     
      this.employe=data;
    });
 
  }
   employe:any={};
}
