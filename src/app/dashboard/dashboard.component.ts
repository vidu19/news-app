import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from '../user/UserData';
import { AdminprojectService } from '../adminproject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private project: AdminprojectService) { }

  user: UserData[];
  s: Subscription;
  u;

  ngOnInit() {
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

  ngOnDestroy(){
    this.s.unsubscribe();
  }


  }

