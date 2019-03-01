import { Component, OnInit } from '@angular/core';
import { AdminprojectService } from '../adminproject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
takenToken;
  constructor(private service: AdminprojectService, private router: Router)   { this.service.logout(); }

  ngOnInit() {
    this.takenToken = this.service.gettoken();
    if(!this.takenToken)
    {
      this.router.navigate(['/login']);
    }
  }

}
