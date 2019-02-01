import { Injectable } from '@angular/core';
import { LoginModel } from './login/LoginModel';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterModel } from './register/RegisterModel';
import { UpdateUser } from './update/UpdateModel';

@Injectable({
  providedIn: 'root'
})
export class AdminprojectService {

  uri="http://localhost:3000";
  public userd;

  constructor(private http: HttpClient,private router: Router) { }

  s : RegisterModel;
  addAdmin(s){
    console.log(s);
    this.http.post(this.uri+'/register',s).subscribe((res)=>{console.log('Registered Successful');
  });
  }

  s1 : LoginModel;
  checkUser(s1){
    console.log(s1);
    this.http.post(this.uri+'/login',s1).subscribe((res)=>{console.log('Login Successful');
    this.router.navigate(['/dashboard']);
  });
  }

  data= this.http.get(this.uri+'/userdata');

  d : UpdateUser;
  updateUser(d){
    console.log(d);
    this.http.post(this.uri+'/update',d).subscribe((res)=> {console.log('User Updated')
  });
  }
}
