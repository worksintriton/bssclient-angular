import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';

import { ActivatedRoute, Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-forgotpswd',
  templateUrl: './forgotpswd.component.html',
  styleUrls: ['./forgotpswd.component.scss']
})
export class ForgotpswdComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  forgotpassword(email){
    Auth.forgotPassword(email)
    .then(data => {
      console.log(data)
      this.saveInLocal('forgot_pwid', email);
      this.router.navigate(['forgotreset']);
    })
    .catch(err => console.log(err));
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
