import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-assignusertoschool',
  templateUrl: './assignusertoschool.component.html',
  styleUrls: ['./assignusertoschool.component.scss']
})
export class AssignusertoschoolComponent implements OnInit {
  datas: Schoolusers[];
  delid: Schoolusers;
  userlist: UsersList[];
  schoollist: SchoolList[];
  public model: Schoolusers;
  loading: boolean;
  constructor(public schools: SchoolsService, private route: ActivatedRoute, private router: Router) {
    this.model = new Schoolusers();
    this.loading = true;
   }

  ngOnInit() {
    this.getschoollist();

  }

  getschoollist(){
    this.schools
    .getAllSchools<SchoolList[]>()
    .subscribe((data: SchoolList[]) => {
      this.schoollist = data;

      console.log(this.schoollist);
    }
    ,
    error => () => {
      /* can provide allert for error on the api */

    },
    () => {
      this.getuserlist()
    });
  }
  getuserlist(){
    this.schools
    .getAllUsers<UsersList[]>()
    .subscribe((data: UsersList[]) => {
      this.userlist = data;


      console.log(this.userlist);
    }
    ,
    error => () => {
      /* can provide allert for error on the api */

    },
    () => {
      this.loading = false;
    });
  }


  check(){
    console.log("schoolid id ");
    console.log(this.model)

    if ( (this.model.schoolID != null) && (this.model.userID != null)){
    this.schools
    .addUserSchool<Schoolusers>(this.model)
    .subscribe((data: Schoolusers) => {

    }
    ,
    error => () => {
      /* can provide allert for error on the api */

    },
    () => {
     alert("user successfully assigned to school");
     this.router.navigate(['main/viewuserschool'])
    });
  }
  else{
    alert("Select a valid user and school");
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
class SchoolList {
  id: number;
  dispid: string;
  dispid2: string;
  schoolID: string;
  schoolName: string;
  schoolAddress_Lane: string;
  schoolAddress_Area: string;
  schoolAddress_City: string;
  schoolAddress_Pincode: number;
  schoolAddress_State: string;
  schoolAddress_Country: string;
  primary_Contact_Number: number;
  alternate_Contact_Number: number;
  primary_Email_Address: string;
  alternate_Email_Address: string;
  primary_Contact_Person_Name: string;
  primary_Contact_Person_contact_number: number;
  primary_Contact_Person_mobile_number: number;
  primary_Contact_Person_email_address: string;
  alternate_Contact_Person_Name: string;
  alternate_Contact_Person_contact_number: number;
  alternate_Contact_Person_mobile_number: number;
  alternate_Contact_Person_email_address: string;
  created_by: string;
  updated_by: string;
}

class UsersList {
  id: number;
  title: string;
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
