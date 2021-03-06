import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
takenToken;
  constructor(private service: AdminprojectService, private router: Router) { }

  ngOnInit() {
    this.takenToken = this.service.gettoken();
    if(!this.takenToken)
    {
      this.router.navigate(['/login']);
    }
  }

  anews=this.service.sendseq();
  flag;
  asubmit(t,s){
    console.log(this.anews);
  this.flag=!this.flag;
  console.log(t,s);
  this.anews.push({"tab":t, "seq":s});
  console.log(this.anews);
  this.flag=!this.flag;
}

del(i,j){
  this.flag=!this.flag;

  this.service.delete(i);
  this.anews.splice(j,1);

  
  this.flag=!this.flag;
}

update(i){
  this.flag=!this.flag;
  console.log(i);
  this.service.updates(i);
  this.flag=!this.flag;
}

}
