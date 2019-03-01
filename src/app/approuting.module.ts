import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RatingComponent } from './rating/rating.component';
import { MasterComponent } from './master/master.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { LogoutComponent } from './logout/logout.component';
import { NewsshowComponent } from './newsshow/newsshow.component';

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
},
{
  path: 'addnews',
  component: AddnewsComponent
},
{
  path: 'update',
  component: UpdateComponent
},
{
  path: 'logout',
  component: LogoutComponent
},
{
  path: 'newsshow',
  component: NewsshowComponent
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
