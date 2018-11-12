import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent  {

  adduser: Adduser;
  datas:any;

  
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.adduser = new Adduser();
  }

  login(uname,pass){

    if ( (uname !== '') || ( pass !== '' ) ) {
      this.adduser.Email_id=uname;
      this.adduser.password=pass;
      this.http.post('http://localhost/authentication/Clientlogin', this.adduser).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      if(this.datas.data == "Invalid Account"){
        alert(this.datas.data);
    }else{
        alert("Login Successfully");
        this.router.navigate(['mainpage']);
    }
    });
    }else{
      alert("Enter the Login-id And Password");
    }  
      }
    }
    
    class Adduser{
      Email_id: string;
      password: string;
    }







  

