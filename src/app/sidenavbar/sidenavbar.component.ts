import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor() { }

 openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  ngOnInit() {
  }

}
