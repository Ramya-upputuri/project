import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:"createstudent",component:CreatestudentComponent},
    {path:"allstudents",component:AllstudentsComponent}
  ]},
  {path:"**", component:PagenotfoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
