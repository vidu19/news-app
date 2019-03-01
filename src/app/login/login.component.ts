import { Component, OnInit } from '@angular/core';
import { LoginModel } from './LoginModel';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
a;
s;
sub:Subscription;
tokenTaken;
bb;
bn: Subscription;

  constructor(private project: AdminprojectService, private router:Router) { }

  login(email,password){
    let data= new LoginModel(email.value,password.value);
  
    this.a=this.project.checkUser(data);
    this.s = this.a.subscribe((data1) =>{
      this.tokenTaken=data1.headers.get('x-token');      
      this.project.settoken(this.tokenTaken);
    console.log("hii");
     this.router.navigate(['/dashboard']);
  });
  
  console.log("hello");
  this.bb = this.project.sequen();
  this.bn = this.bb.subscribe((req)=>{
    console.log(req);
     this.project.setseq(req);
   
 
  });

}

  ngOnInit() {
  }

}
