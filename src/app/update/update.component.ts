import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../register/RegisterModel';
import { AdminprojectService } from '../adminproject.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private project: AdminprojectService) { }

  update(name,email,password){
    let data=new RegisterModel(name.value,email.value,password.value);
    this.project.updateUser(data);
  }
  ngOnInit() {
  }

}
