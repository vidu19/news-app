import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from '../user/UserData';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private project: AdminprojectService, private router: Router) { }

  user: UserData[];
  s: Subscription;
  u;
takenToken;
  ngOnInit() {
    this.takenToken = this.project.gettoken();
    if(!this.takenToken)
    {
      this.router.navigate(['/login']);
    }
    else{
    this.u = this.project.data;
    this.s = this.u.subscribe(( data1)=>{
      this.user=data1;
    },
    (err) =>{
      console.log(err);
    },
    () => {
      console.log("completed");
    }
    );
  }
}
/* 
  ngOnDestroy(){
    this.s.unsubscribe();
  } */


  }

