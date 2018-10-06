import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.scss']
})
export class AddcomplaintComponent implements OnInit {
  datas: UsersList[];
  countrylist: string[];
  delid: UsersList;
  public model: UsersList;
  public errormodel: EUsersList
  public userschool: Schoolusers[];
  t_phone_countrycode: string;
  t_mobile_countrycode: string;
 // rowid: number;
 // schools: any;
 constructor(public schools: SchoolsService, private httpService: HttpClient, private route: ActivatedRoute, private router: Router) {
   this.model = new UsersList();
   this.errormodel = new EUsersList();

   this.model.title = '';
   this.model.first_name = '';
   this.model.middle_name = '';
   this.model.last_name = '';
  // this.model.phone_number = 0;
  // this.model.mobile_number = '';
   this.model.address = '';
   this.model.email_address = '';
 this.model.street = '';
 this.model.city = '';
 this.model.pincode = '';
 this.model.state = '';
 this.model.country = '';
 this.model.created_by = '';
 this.model.updated_by = '';


 Amplify.configure({
  Auth: {
      identityPoolId: 'ap-south-1:93d2e200-af68-4de4-a29a-daced7c9977a', // Amazon Cognito Identity Pool ID us-east-1_XYZPQRS
      region: 'AP_SOUTH_1', // Amazon Cognito Region
       userPoolId: 'ap-south-1_NJso3yHdO',
       identityPoolRegion: 'ap-south-1',
// OPTIONAL - Amazon Cognito User Pool ID
userPoolWebClientId: '54ng1i3fm0i0n6h1nvda2nhur3',
mandatorySignIn: false,
authenticationFlowType: 'USER_PASSWORD_AUTH',
// OPTIONAL - Amazon Cognito Web Client ID
oauth: {
 domain: 'cynosureadmin.auth.ap-south-1.amazoncognito.com',
 // Authorized scopes
 scope: ['email'],
 // Callback URL
 redirectSignIn: 'http://localhost:4200/authenticated',
 // Sign out URL
 redirectSignOut: 'http://localhost:4200/logout',
 // 'code' for Authorization code grant,
 // 'token' for Implicit grant
 responseType: 'code',
 // optional, for Cognito hosted ui specified options
 options: {
 // Indicates if the data collection is enabled to support Cognito advanced security features.
 // By default, this flag is set to true.
   AdvancedSecurityDataCollectionFlag: true
 }
  }
}
});
  }
  ngOnInit() {
    this.httpService.get('./assets/data/CountryCodes.json').subscribe(
      data => {
        this.countrylist = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log( this.countrylist)
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  validate() {
    this.model.mobile_number = this.t_mobile_countrycode + this.model.mobile_number;
    this.model.phone_number = this.t_phone_countrycode + this.model.phone_number;
    console.log("schoolid id ");
    console.log(this.model)


    this.schools
    .addUser<UsersList>(this.model)
    .subscribe((data: UsersList) => {
      this.router.navigate(['main/usermanagements'])
    }
    ,
    error => () => {
      /* can provide allert for error on the api */

    },
    () => {

    });


  }

check() {
  console.log({
    email: '' + this.model.email_address,
    name: '' + this.model.first_name
  });
  Auth.signUp({
    username: this.model.email_address,
    password: 'Asdf@1234',
    attributes: {
      name: '' + this.model.first_name
    },
    validationData: []  // optional
    })
    .then(data => {
      console.log('success');
      console.log(data);

      this.check_data();
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      alert(err);
    });
}

check_verify(code) {
  // After retrieveing the confirmation code from the user
Auth.confirmSignUp('username', code, {
  // Optional. Force user confirmation irrespective of existing alias. By default set to True.
  forceAliasCreation: true
}).then(data => {
  console.log(data)
  alert('verified')
})
.catch(err => {
  console.log(err)
  alert(err);
});
}

  check_data() {
    let has_error = false;
    this.errormodel.id = false;
    this.errormodel.title = false;
    this.errormodel.first_name = false;
    this.errormodel.middle_name = false;
    this.errormodel.last_name = false;
    this.errormodel.phone_number = false;
    this.errormodel.mobile_number = false;
    this.errormodel.address = false;
    this.errormodel.email_address = false;
  this.errormodel.street = false;
  this.errormodel.city = false;
  this.errormodel.pincode = false;
  this.errormodel.state = false;
  this.errormodel.country = false;
  this.errormodel.created_by = false;
  this.errormodel.updated_by = false;


  if (this.model.title === '') {
    this.errormodel.title = true;
    has_error = true;
  }

  if (this.model.first_name === '') {
    this.errormodel.first_name = true;
    has_error = true;
  }

  if (this.model.middle_name === '') {
    this.errormodel.middle_name = true;
    has_error = true;
  }

  if (this.model.last_name === '') {
    this.errormodel.last_name = true;
    has_error = true;
  }

  if (this.model.phone_number === '') {
    this.errormodel.phone_number = true;
    has_error = true;
  }

  if (this.model.mobile_number === '') {
    this.errormodel.mobile_number = true;
    has_error = true;
  }


  if (this.model.email_address === '') {
    this.errormodel.email_address = true;
    has_error = true;
  }

  if (this.model.street === '') {
    this.errormodel.street = true;
    has_error = true;
  }

  if (this.model.city === '') {
    this.errormodel.city = true;
    has_error = true;
  }

if (this.model.pincode === '') {
  this.errormodel.pincode = true;
  has_error = true;
}

if (this.model.state === '') {
  this.errormodel.state = true;
  has_error = true;
}

if (this.model.country === '') {
  this.errormodel.country = true;
  has_error = true;
}

if (has_error === true) {
  alert('Enter Valid details');
  console.log(this.errormodel);
} else {

  this.validate();
}


}




}
class Schoolusers {
id: number;
email: string;
schoolID: number;
userID: number;
createdby: string;
updatedby: string;
}



class UsersList {

id: number;
title: string;
schools: string[];
dispid: string;
dispid2: string;
first_name: string;
middle_name: string;
last_name: string;
phone_number: string;
mobile_number: string;
address: string;
email_address: string;
street: string;
city: string;
pincode: string;
state: string;
country: string;
created_by: string;
updated_by: string;

}

class EUsersList {

  id: boolean;
  title: boolean;
  first_name: boolean;
  middle_name: boolean;
  last_name: boolean;
  phone_number: boolean;
  mobile_number: boolean;
  address: boolean;
  email_address: boolean;
  street: boolean;
  city: boolean;
  pincode: boolean;
  state: boolean;
  country: boolean;
  created_by: boolean;
  updated_by: boolean;
  }
