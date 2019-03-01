import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newsshow',
  templateUrl: './newsshow.component.html',
  styleUrls: ['./newsshow.component.css']
})
export class NewsshowComponent implements OnInit {
takenToken;
u;
s= Subscription;
news ;
  constructor(private project: AdminprojectService, private router: Router) {
    this.u = this.project.data2;
    this.s = this.u.subscribe(( data1)=>{
      this.news=data1;
    },
    (err) =>{
      console.log(err);
    },
    () => {
      console.log("completed");
    }
    );
   }

  ngOnInit() {
    this.takenToken = this.project.gettoken();
    if(!this.takenToken)
    {
      this.router.navigate(['/login']);
    }
  }

}
