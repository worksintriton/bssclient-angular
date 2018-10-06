import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { SchoolsService } from '../schools.service';
// import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-schoolmanagement',
  templateUrl: './schoolmanagement.component.html',
  styleUrls: ['./schoolmanagement.component.scss']
})
export class SchoolmanagementComponent implements OnInit {
  delid: SchoolList;
  newSchool: SchoolList;
  datas: any;
  public model: SchoolList;
  loading: boolean;
  deleteLoading: boolean;
  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;

  constructor( public schools: SchoolsService, private route: ActivatedRoute, private router: Router  ) {
    this.model = new SchoolList();
    this.delid = new SchoolList();
    this.loading = false;
    this.deleteLoading = false;
   }

  ngOnInit() {
    this.syncdata();

    }

    newsync() {
      const startval = (this.advancedPage - 1) * this.sizePage;
      let endval = this.advancedPage * this.sizePage;
      if (this.datas.length > endval) {
      }else {
        endval = this.datas.length
      }
      this.pagedata = [];
      for (let index = startval; index < endval; index++) {

        this.pagedata.push(this.datas[index]);


      }

    }
    syncdata(){
      this.loading = true;
      this.schools
      .getAllSchools<SchoolList[]>()
      .subscribe((data: SchoolList[]) => {
        this.datas = data;
        this.totalcount = this.datas.length;
        this.collsize = (this.datas.length);
        for (let i = 0; i < this.datas.length; i++) {
          this.datas[i].dispid = '#e'+this.datas[i].id;
          this.datas[i].dispid2 = 'e'+this.datas[i].id;
          this.datas[i].delAction = "(click) = 'setdelete("+this.datas[i].id+")'";
          this.datas[i].created_by = this.datas[i].create_Date.toString();
        }
        this.loading = false;
        console.log(this.datas);
      }
      ,
      error => () => {
        /* can provide allert for error on the api */

      },
      () => {
        this.advancedPage = 1;
        this. newsync();
      });
    }
    setdelete(id: string){
      console.log("The Delete ID is "+id);
    }

    deleteschol(){
      this.deleteLoading = true;
      console.log("The id ");
      console.log(this.delid);
      console.log(" is deleted");

      this.schools
      .deleteSchool<SchoolList[]>(this.delid.id)
      .subscribe((data: any) => {

      }
      ,
      error => () => {
        /* can provide allert for error on the api */
          console.log("eror")
      },
      () => {
        this.syncdata();
        this.deleteLoading = false;
      });


    }

    public open(event, item) {
      this.delid = item;

    }

    public edit(event, item){
      this.router.navigate(['main/updateschool/' + item.id])
    }
    check(){
      console.log("schoolid id ");
      console.log(this.model)


      this.schools
      .addSchool<SchoolList>(this.model)
      .subscribe((data: SchoolList) => {
        alert("added");
      }
      ,
      error => () => {
        /* can provide allert for error on the api */

      },
      () => {
        this.syncdata();
      });


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
  create_Date: ByteString;
  updated_by: string;
  updated_Date: ByteString;
}
