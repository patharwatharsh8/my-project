import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyoedataComponent } from './emplyoedata/emplyoedata.component';
import { EmplyoeformComponent } from './emplyoeform/emplyoeform.component';
import { UpdateemployeComponent } from './updateemploye/updateemploye.component';
import { ViewemployeComponent } from './viewemploye/viewemploye.component';

const routes: Routes = [{path:'employeform',component:EmplyoeformComponent},
                        {path:'',component:EmplyoedataComponent},
                        {path:'viewemploye/:empid',component:ViewemployeComponent},
                        {path:'update/:empid',component:UpdateemployeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
