import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.scss']
})
export class ViewfeedbackComponent implements OnInit {

  datas: UsersList[];
  delid: UsersList;
  public model: UsersList;
  public userschool: Schoolusers[];
  loading: boolean;
  deleteLoading: boolean;
  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;
 // rowid: number;
 // schools: any;
 constructor(public schools: SchoolsService ,private route: ActivatedRoute, private router: Router  ) {
   this.model = new UsersList();
   this.delid = new UsersList();
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

   deleteuser(){
     this.deleteLoading = true;
     console.log("The id ");
     console.log(this.delid);
     console.log(" is deleted");

     this.schools
     .deleteUser<UsersList[]>(this.delid.id)
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
     this.router.navigate(['main/updateuser/' + item.id])
   }
   syncdata(){
     this.loading = true;
     this.schools
     .getAllUsers<UsersList[]>()
     .subscribe((data: UsersList[]) => {
       this.datas = data;
       this.totalcount = this.datas.length;
       this.collsize = (this.datas.length);
       for (let i = 0; i < this.datas.length; i++) {
         this.datas[i].dispid = "#ee"+this.datas[i].id;
         this.datas[i].dispid2 = "ee"+this.datas[i].id;
       }
       this.datas.forEach(element => {
         element.schools = [];
       });
       this.getuserschool();
       console.log(this.datas);
     }
     ,
     error => () => {
       /* can provide allert for error on the api */

     },
     () => {
       this.newsync();
       console.log(this.datas);

     });

   }

   getuserschool() {
     this.schools
     .getAllUserSchools<Schoolusers[]>()
     .subscribe((data: Schoolusers[]) => {
       this.userschool = data;

       console.log(this.userschool);
       for (let j = 0; j < this.userschool.length; j++) {
         for (let i = 0; i < this.datas.length; i++) {
           if(this.userschool[j].userID === this.datas[i].id) {
           this.datas[i].schools.push('' + this.userschool[j].schoolID);
           }
         }
       }
       console.log('user assigned');
       console.log(this.datas);
       this.loading = false;

     },
     error => () => {
       /* can provide allert for error on the api */
         console.log("error"+error)
     },
     () => {
        console.log(this.datas);
     });
   }

   check(){
     console.log("schoolid id ");
     console.log(this.model)


     this.schools
     .addUser<UsersList>(this.model)
     .subscribe((data: UsersList) => {
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
