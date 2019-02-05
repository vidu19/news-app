import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';
import { Addnews } from './AddNews';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private project: AdminprojectService, private router:Router) { }

  add:Addnews;
  a;
  s:Subscription;

  addNews( name,url,desc,cat )
  {
    this.add = new Addnews(name,url,desc,cat);
    this.a = this.project.NewNews(this.add);
    this.s = this.a.subscribe((data) => {
    console.log(data); 
    },
    (err) => {
    console.log(err);
    },
    () => {
      console.log("Added");
    });
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
