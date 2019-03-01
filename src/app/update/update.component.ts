import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { UpdateUser } from './UpdateModel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user;
  constructor(private project: AdminprojectService) { 
    this.user= this.project.updateUserReturn();
    console.log(this.user);
  }
  
   
  update(name,email,password){
    let data=new UpdateUser(name.value,email.value,password.value);
    this.project.updateUser(data);
  }
  ngOnInit() {
    
  }

}
