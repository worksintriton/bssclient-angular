import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';

import { ActivatedRoute, Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-forgotreset',
  templateUrl: './forgotreset.component.html',
  styleUrls: ['./forgotreset.component.scss']
})
export class ForgotresetComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  forgotpassword(code, new_password){
    Auth.forgotPasswordSubmit(this.getFromLocal('forgot_pwid'), code, new_password)
    .then(data => {
      console.log(data);
      alert('success');
      this.saveInLocal('forgot_pwid', '');
      this.router.navigate(['']);
    })
    .catch(err => {console.log(err)});
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
