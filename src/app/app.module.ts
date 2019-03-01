import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MasterComponent } from './master/master.component';
import { RatingComponent } from './rating/rating.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproutingModule } from './approuting.module';
import { RouterModule } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { UpdateComponent } from './update/update.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { LogoutComponent } from './logout/logout.component';
import { NewsshowComponent } from './newsshow/newsshow.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    MasterComponent,
    RatingComponent,
    RegisterComponent,
    SidenavbarComponent,
    UpdateComponent,
    AddnewsComponent,
    LogoutComponent,
    NewsshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApproutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
