import { Injectable } from '@angular/core';
import { LoginModel } from './login/LoginModel';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterModel } from './register/RegisterModel';
import { UpdateUser } from './update/UpdateModel';
import { Addnews } from './addnews/AddNews';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminprojectService {

  uri="http://localhost:3000";
  public userd;
data2;
  constructor(private http: HttpClient,private router: Router) {
    this.data2 = this.http.get(this.uri+"/ShowAllnews");

   }

  s : RegisterModel;
  addAdmin(s){
    console.log(s);
    this.http.post(this.uri+'/register',s).subscribe((res)=>{console.log('Registered Successful');
  });
  }

  s1 : LoginModel;
  checkUser(s1): Observable<HttpResponse<LoginModel>>
  {
    console.log(s1);
    return this.http.post<LoginModel>(this.uri+'/login',s1,{observe: 'response'});
  
  }

  data= this.http.get(this.uri+'/userdata');

  usr;
  updateUserSend(x){
    //console.log(x);
    this.usr=x;
  }

  updateUserReturn(){
    //console.log(this.usr);
    return this.usr;
  }

  d : UpdateUser;
  updateUser(d){
    console.log(d);
    this.http.post(this.uri+'/update',d).subscribe((res)=> {console.log('User Updated')
  });
  }

aruser;
  
setuser(req){

  this.aruser=req;
  console.log(req);
 this.router.navigate(['/dashboard']);
}

returnuser(){
  console.log(this.aruser);
  return this.aruser;
}

logout(){
  this.j= localStorage.getItem("x-token");
  console.log(this.j);
  localStorage.removeItem("x-token");
  this.http.post('http://localhost:3000/logoutAdmin',{"token":this.j}).subscribe((res)=> { console.log("done");
  this.router.navigate(['/login']);
});
}

j;
settoken(t){
this.j=t;
localStorage.setItem('x-token',t);
}

gettoken(){
return localStorage.getItem('x-token');
}

  addn: Addnews

  NewNews(addn)
  {
  	return this.http.post(this.uri+'/addnews', addn);
  }

  updates(i){
    console.log(i.tab);
    this.http.post('http://localhost:3000/update_sequence',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=> { console.log("done");
    
    });
    }
    
    delete(i){
      console.log(i);
      i.tab='';
      this.http.post('http://localhost:3000/update_sequ',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=> { console.log("done");
    
    });
      
    }
    
    
    sequen(){
      return this.http.get('http://localhost:3000/tab_sequence');
    }
    
    anews;
    setseq(h){
    this.anews=h;
    console.log(this.anews);
    }
    
    sendseq(){
      return this.anews;
    }
    
    
}
