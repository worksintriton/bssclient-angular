import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.scss']
})
export class AddschoolComponent implements OnInit {
  delid: SchoolList;
  errorschool: ESchoolList;
  datas: any;
  public model: SchoolList;
  countrylist: string[];
  t_primary_Contact_Number_countrycode: string;
  t_alternate_Contact_Number_countrycode: string;
  t_primary_Contact_Person_contact_number_countrycode: string;
  t_primary_Contact_Person_mobile_number_countrycode: string;
  t_alternate_Contact_Person_contact_number_countrycode: string;
  t_alternate_Contact_Person_mobile_number_countrycode: string;



  constructor( public schools: SchoolsService, private httpService: HttpClient, private route: ActivatedRoute, private router: Router ) {
    // this.http.get('https://sjrb3ed89j.execute-api.ap-south-1.amazonaws.com/Prod//api/schools').subscribe(data => {
    //   this.datas = data;
    //   console.log(this.datas);
    //   });
    this.model = new SchoolList();
    this.model.schoolID = '';
    this.model.schoolName = '';
    this.model.schoolAddress_Lane = '';
    this.model.schoolAddress_Area = '';
    this.model.schoolAddress_City = '';
    // this.model.schoolAddress_Pincode = 0;
    this.model.schoolAddress_State = '';
    this.model.schoolAddress_Country = '';
    // this.model.primary_Contact_Number = 0;
    // this.model.alternate_Contact_Number = 0;
    this.model.primary_Email_Address = '';
    this.model.alternate_Email_Address = '';
    this.model.primary_Contact_Person_Name = '';
    // this.model.primary_Contact_Person_contact_number = 0;
    // this.model.primary_Contact_Person_mobile_number = 0;
    this.model.primary_Contact_Person_email_address = '';
    this.model.alternate_Contact_Person_Name = '';
    // this.model.alternate_Contact_Person_contact_number = 0;
    // this.model.alternate_Contact_Person_mobile_number = 0;
    this.model.alternate_Contact_Person_email_address = '';
    this.model.created_by = '';
    this.model.updated_by = '';
    this.errorschool = new ESchoolList();
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
    this.inivalidate();
  }

  validate() {




      let model1 = this.model;


      model1.primary_Contact_Number = this.t_primary_Contact_Number_countrycode + this.model.primary_Contact_Number;
      model1.alternate_Contact_Number = this.t_alternate_Contact_Number_countrycode + this.model.alternate_Contact_Number;
      model1.primary_Contact_Person_contact_number = this.t_primary_Contact_Person_contact_number_countrycode + this.model.primary_Contact_Person_contact_number;
      model1.primary_Contact_Person_mobile_number = this.t_primary_Contact_Person_mobile_number_countrycode + this.model.primary_Contact_Person_mobile_number;
      model1.alternate_Contact_Person_contact_number = this.t_alternate_Contact_Person_contact_number_countrycode + this.model.alternate_Contact_Person_contact_number;
      model1.alternate_Contact_Person_mobile_number = this.t_alternate_Contact_Person_mobile_number_countrycode + this.model.alternate_Contact_Person_mobile_number;
      console.log('schoolid id');
      console.log(model1)
      this.schools
      .addSchool<SchoolList>(model1)
      .subscribe((data: SchoolList) => {

      }
      ,
      error => () => {
        /* can provide allert for error on the api */
      },
      () => {
        this.router.navigate(['main/schoolmanagement'])
      });

    }
    inivalidate() {

      this.errorschool.schoolID = false;
      this.errorschool.schoolName = false;
      this.errorschool.schoolAddress_Lane = false;
      this.errorschool.schoolAddress_Area = false;
      this.errorschool.schoolAddress_City = false;
      this.errorschool.schoolAddress_Pincode = false;
      this.errorschool.schoolAddress_State = false;
      this.errorschool.schoolAddress_Country = false;
      this.errorschool.primary_Contact_Number = false;
      this.errorschool.alternate_Contact_Number = false;
      this.errorschool.primary_Email_Address = false;
      this.errorschool.alternate_Email_Address = false;
      this.errorschool.primary_Contact_Person_Name = false;
      this.errorschool.primary_Contact_Person_contact_number = false;
      this.errorschool.primary_Contact_Person_mobile_number = false;
      this.errorschool.primary_Contact_Person_email_address = false;
      this.errorschool.alternate_Contact_Person_Name = false;
      this.errorschool.alternate_Contact_Person_contact_number = false;
      this.errorschool.alternate_Contact_Person_mobile_number = false;
      this.errorschool.alternate_Contact_Person_email_address = false;
      this.errorschool.created_by = false;
      this.errorschool.updated_by = false;
    }

    check() {

      let has_error = false;
      this.errorschool.schoolID = false;
      this.errorschool.schoolName = false;
      this.errorschool.schoolAddress_Lane = false;
      this.errorschool.schoolAddress_Area = false;
      this.errorschool.schoolAddress_City = false;
      this.errorschool.schoolAddress_Pincode = false;
      this.errorschool.schoolAddress_State = false;
      this.errorschool.schoolAddress_Country = false;
      this.errorschool.primary_Contact_Number = false;
      this.errorschool.alternate_Contact_Number = false;
      this.errorschool.primary_Email_Address = false;
      this.errorschool.alternate_Email_Address = false;
      this.errorschool.primary_Contact_Person_Name = false;
      this.errorschool.primary_Contact_Person_contact_number = false;
      this.errorschool.primary_Contact_Person_mobile_number = false;
      this.errorschool.primary_Contact_Person_email_address = false;
      this.errorschool.alternate_Contact_Person_Name = false;
      this.errorschool.alternate_Contact_Person_contact_number = false;
      this.errorschool.alternate_Contact_Person_mobile_number = false;
      this.errorschool.alternate_Contact_Person_email_address = false;
      this.errorschool.created_by = false;
      this.errorschool.updated_by = false;


      if (this.model.schoolID === '') {
        this.errorschool.schoolID = true;
        has_error = true;
      }
      if (this.model.schoolName === '') {
        this.errorschool.schoolName = true;
        has_error = true;
      }

      if (this.model.schoolAddress_Lane === '') {
        this.errorschool.schoolAddress_Lane = true;
        has_error = true;
      }

      if (this.model.schoolAddress_Area === '') {
        this.errorschool.schoolAddress_Area = true;
        has_error = true;
      }

      if (this.model.schoolAddress_City === '') {
        this.errorschool.schoolAddress_City = true;
        has_error = true;
      }

      if (this.model.schoolAddress_Pincode === 0) {
        this.errorschool.schoolAddress_Pincode = true;
        has_error = true;
      }

      if (this.model.schoolAddress_State === '') {
        this.errorschool.schoolAddress_State = true;
        has_error = true;
      }

      if (this.model.schoolAddress_Country === '') {
        this.errorschool.schoolAddress_Country = true;
        has_error = true;
      }

      if (this.model.primary_Contact_Number === '') {
        this.errorschool.primary_Contact_Number = true;
        has_error = true;
      }


      if (this.model.alternate_Contact_Number === '') {
        this.errorschool.alternate_Contact_Number = true;
        has_error = true;
      }

      if (this.model.primary_Email_Address === '') {
        this.errorschool.primary_Email_Address = true;
        has_error = true;
      }

      if (this.model.alternate_Email_Address === '') {
        this.errorschool.alternate_Email_Address = true;
        has_error = true;
      }

      if (this.model.primary_Contact_Person_Name === '') {
        this.errorschool.primary_Contact_Person_Name = true;
        has_error = true;
      }

      if (this.model.primary_Contact_Person_contact_number === '') {
        this.errorschool.primary_Contact_Person_contact_number = true;
        has_error = true;
      }

      if (this.model.primary_Contact_Person_mobile_number === '') {
        this.errorschool.primary_Contact_Person_mobile_number = true;
        has_error = true;
      }

      if (this.model.primary_Contact_Person_email_address === '') {
        this.errorschool.primary_Contact_Person_email_address = true;
        has_error = true;
      }

      if (this.model.alternate_Contact_Person_Name === '') {
        this.errorschool.alternate_Contact_Person_Name = true;
        has_error = true;
      }

      if (this.model.alternate_Contact_Person_contact_number === '') {
        this.errorschool.alternate_Contact_Person_contact_number = true;
        has_error = true;
      }

      if (this.model.alternate_Contact_Person_mobile_number === '') {
        this.errorschool.alternate_Contact_Person_mobile_number = true;
        has_error = true;
      }

      if (this.model.alternate_Contact_Person_email_address === '') {
        this.errorschool.alternate_Contact_Person_email_address = true;
        has_error = true;
      }



      if (has_error === true) {
        alert('Enter Valid details');
        console.log(this.errorschool);
      } else {

        this.validate();
      }

    }
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
    primary_Contact_Number: string;
    alternate_Contact_Number: string;
    primary_Email_Address: string;
    alternate_Email_Address: string;
    primary_Contact_Person_Name: string;
    primary_Contact_Person_contact_number: string;
    primary_Contact_Person_mobile_number: string;
    primary_Contact_Person_email_address: string;
    alternate_Contact_Person_Name: string;
    alternate_Contact_Person_contact_number: string;
    alternate_Contact_Person_mobile_number: string;
    alternate_Contact_Person_email_address: string;
    created_by: string;
    updated_by: string;
  }

  class ESchoolList {
    id: number;
    dispid: string;
    dispid2: string;
    schoolID: boolean;
    schoolName: boolean;
    schoolAddress_Lane: boolean;
    schoolAddress_Area: boolean;
    schoolAddress_City: boolean;
    schoolAddress_Pincode: boolean;
    schoolAddress_State: boolean;
    schoolAddress_Country: boolean;
    primary_Contact_Number: boolean;
    alternate_Contact_Number: boolean;
    primary_Email_Address: boolean;
    alternate_Email_Address: boolean;
    primary_Contact_Person_Name: boolean;
    primary_Contact_Person_contact_number: boolean;
    primary_Contact_Person_mobile_number: boolean;
    primary_Contact_Person_email_address: boolean;
    alternate_Contact_Person_Name: boolean;
    alternate_Contact_Person_contact_number: boolean;
    alternate_Contact_Person_mobile_number: boolean;
    alternate_Contact_Person_email_address: boolean;
    created_by: boolean;
    updated_by: boolean;
  }
