import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { UserData } from './UserData';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private project: AdminprojectService, private router: Router) { }

  userUpdate(){
    this.router.navigate(['/update']);
  }

  userdata: UserData[];
  s: Subscription;
  u;

  ngOnInit() {
    this.u = this.project.data;
    this.s = this.u.subscribe(( data1)=>{
      this.userdata=data1;
    },
    (err) =>{
      console.log(err);
    },
    () => {
      console.log("completed");
    }
    )  ;
  }

  ngOnDestroy(){
    this.s.unsubscribe();
  }

}
