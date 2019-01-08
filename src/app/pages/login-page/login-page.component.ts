import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent  {
  user_name:string;
  datas: any;

adduser: Adduser;
constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
  this.adduser = new Adduser();
}



addapi(Email_id,password){

  if ( (Email_id !== '') || ( password !== '' ) ) {
    console.log(this.adduser);
    this.adduser.Email_id=Email_id;
    this.adduser.password=password;
    this.http.post('http://132.148.140.42:84/authentication/Clientlogin', this.adduser).subscribe(data => {
    this.datas = data;
    console.log(this.datas.data[0]);

    if(this.datas.data == "Invalid Account"){
      alert(this.datas.data);
  }else{
      alert("Login Successfully");
      this.saveInLocal('Name',this.datas.data[0].Client_Name);
      this.saveInLocal('user_id',this.datas.data[0].id);
      this.saveInLocal('usertype',this.datas.data[0].Designations);
      this.router.navigate(['mainpage'])
  }
  });
  
  }else{
    alert("Enter the Login-id And Password");
  }  
    }


    forgot(){

      this.router.navigate(['forgotpassword']);


    }






saveInLocal(key, val): void {
  console.log('recieved= key:' + key + 'value:' + val);
  this.storage.set(key, val);
 }
 getFromLocal(key): any {
  console.log('recieved= key:' + key);
  return this.storage.get(key);
 }


}

class Adduser{
  Email_id: string;
  password: string;
}

