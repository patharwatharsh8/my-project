import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyoedataComponent } from './emplyoedata/emplyoedata.component';
import { EmplyoeformComponent } from './emplyoeform/emplyoeform.component';
import { UpdateemployeComponent } from './updateemploye/updateemploye.component';
import { ViewemployeComponent } from './viewemploye/viewemploye.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from'@angular/router';
const Routes:Routes=[{path:'employeeform',component:EmplyoeformComponent},{path:'employedata',component:EmplyoedataComponent}]

@NgModule({
  declarations: [
    AppComponent,
    EmplyoedataComponent,
    EmplyoeformComponent,
    UpdateemployeComponent,
    ViewemployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
