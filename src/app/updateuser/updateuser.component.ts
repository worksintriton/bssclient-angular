import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
  schid: number;
  datas: UsersList;
  delid: UsersList;
  public model: UsersList;
  public userschool: Schoolusers[];
  public errormodel: EUsersList
 // rowid: number;
 // schools: any;
 constructor(public schools: SchoolsService , private route: ActivatedRoute, private router: Router ) {
   this.model = new UsersList();
   this.errormodel = new EUsersList();
   this.route.params.subscribe(params => {
    this.schid = params['id']; // (+) converts string 'id' to a number
    console.log("this id: "+ this.schid);
 });
  }
  ngOnInit() {
    this.schools
    .getSingleUser<UsersList>(this.schid)
    .subscribe((data: UsersList) => {
      this.model = data;
    }
    ,
    error => () => {
      /* can provide allert for error on the api */
    },
    () => {
      console.log(this.model);
    });
  }

  check(){
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

  validate(){
    console.log("schoolid id ");
    console.log(this.model)


    this.schools
    .updateUser<UsersList>(this.schid, this.model)
    .subscribe(() => {
    }
    ,
    error => () => {
      /* can provide allert for error on the api */

    },
    () => {
      alert("Updated Successfully");
        this.router.navigate(['main/usermanagements'])
    });
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
dispid2:string;
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
