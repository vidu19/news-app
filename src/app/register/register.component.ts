import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { RegisterModel } from './RegisterModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private project: AdminprojectService, private router: Router) { }

  signup(name, email, pass){
    let data1= new RegisterModel(name.value,email.value,pass.value);
    this.project.addAdmin(data1);
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
