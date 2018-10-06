import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Auth } from 'aws-amplify';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-changepasword',
  templateUrl: './changepasword.component.html',
  styleUrls: ['./changepasword.component.scss']
})
export class ChangepaswordComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  changePassword(oldpass, newpass, confnewpass) {
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, oldpass, newpass);
    })
    .then(data => {
      alert('Success');
      console.log(data)
      this.router.navigate(['main/dashboard'])
    })
    .catch(err => {
      console.log(err);
      alert('error');
    });
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
