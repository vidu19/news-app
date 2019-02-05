import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from '../user/UserData';
import { AdminprojectService } from '../adminproject.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private project: AdminprojectService) { }
  userdata: UserData;
  s: Subscription;
  u;

  ngOnInit() {
    this.u = this.project.data;
    this.s = this.u.subscribe((data1)=>{
      this.userdata=data1;
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
