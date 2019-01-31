import { Component, OnInit } from '@angular/core';
import { LoginModel } from './LoginModel';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private project: AdminprojectService, private router:Router) { }

  login(email,password){
    let data= new LoginModel(email.value,password.value);
  
    this.project.checkUser(data);
    console.log("hii")
     this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}
