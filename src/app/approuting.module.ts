import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RatingComponent } from './rating/rating.component';
import { MasterComponent } from './master/master.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes =[{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path:'login',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'user',
  component: UserComponent
},
{
  path: 'rating',
  component: RatingComponent
},
{
  path: 'master',
  component: MasterComponent
},
{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
