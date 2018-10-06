import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-viewschooluser',
  templateUrl: './viewschooluser.component.html',
  styleUrls: ['./viewschooluser.component.scss']
})

export class ViewschooluserComponent implements OnInit {

  datas: Schoolusers[];
  delid: Schoolusers;
  userlist: UsersList[];
  schoollist: SchoolList[];
  public model: Schoolusers;
  public userschool: Schoolusers[];
  loading: boolean;
  deleteLoading: boolean;
  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;

  constructor(public schools: SchoolsService , private route: ActivatedRoute, private router: Router) {
    this.model = new Schoolusers();
    this.delid = new Schoolusers();
    this.delid.school = new SchoolList();
   }

  ngOnInit() {
    this.getuserschool()
  }
  newsync() {
    const startval = (this.advancedPage - 1) * this.sizePage;
    let endval = this.advancedPage * this.sizePage;
    if (this.userschool.length > endval) {
    }else {
      endval = this.userschool.length
    }
    this.pagedata = [];
    for (let index = startval; index < endval; index++) {

      this.pagedata.push(this.userschool[index]);


    }

  }
  getuserschool() {
    this.loading = true;
    this.schools
    .getAllUserSchools<Schoolusers[]>()
    .subscribe((data: Schoolusers[]) => {
      this.userschool = data;
      this.totalcount = this.userschool.length;
      this.collsize = (this.userschool.length);
    },
    error => () => {
      /* can provide allert for error on the api */
        console.log('error' + error)
    },
    () => {
      this.getschoollist();
       console.log(this.datas);
    });
  }
  getschoollist() {
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
      this.getuserlist();
    });
  }
  getuserlist() {
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
      this.userschool.forEach(element => {
        for (let i = 0; i < this.schoollist.length; i++) {
          if (this.schoollist[i].id === element.schoolID) {
          element.school = this.schoollist[i];
          break;
          }
        }
        for (let i = 0; i < this.userlist.length; i++) {
          if (this.userlist[i].id === element.userID) {
            element.users = this.userlist[i];
            break;
            }
        }
      });
      for (let index = 0; index < this.userschool.length; index++) {
        if ((this.userschool[index].school == null) || (this.userschool[index].users == null) ) {
          this.userschool.splice(index, 1);
          index--;
        }
      }
      console.log('merged data');
      console.log(this.userschool);
      this.loading = false;
      this.newsync();
    });
  }


  deleteschol() {
    this.deleteLoading = true;
    console.log("The id ");
    console.log(this.delid);
    console.log(" is deleted");

    this.schools
    .deleteUserSchool<Schoolusers[]>(this.delid.id)
    .subscribe((data: any) => {
      alert(' Successfully Deleted ');
    },
    error => () => {
      /* can provide allert for error on the api */
        console.log('eror');
    },
    () => {
      this.getuserschool();
      this.deleteLoading = false;
    });


  }

  public open(event, item) {
    this.delid = item;

  }

}
class Schoolusers {
  id: number;
  email: string;
  schoolID: number;
  userID: number;
  users: UsersList;
  school: SchoolList;
  createdby: string;
  updatedby: string;
}
class UsersList {
  id: number;
  title: string;
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

