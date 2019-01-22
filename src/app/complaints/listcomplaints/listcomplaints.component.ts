import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-listcomplaints',
  templateUrl: './listcomplaints.component.html',
  styleUrls: ['./listcomplaints.component.scss']
})
export class ListcomplaintsComponent implements OnInit {

  
  datas:any;
  id:string;
  name:string;
  Open:any;
  Inprogree: any;
  Complete:any;
  All:any;
  counts:any;
  today:any;
  addissue:addissue;
  datass:any;
  selectedfile:any;
  selectedfiles:any;
















  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  
    this.addissue = new addissue();



    
  }

  public attach() {
    const fd = new FormData();
    for(let i = 0; i<this.selectedfiles.length ;i++){
    fd.append('filetoupload', this.selectedfile[i], this.selectedfile[i].name);
    console.log(fd);
    }
    // fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
    // console.log(fd);
    // this.http.post('http://132.148.140.42:84/upload/file', fd)
    // .subscribe((data: any) => {
    // console.log(data.data); 
    // this.next1(data.data.path)
    // this.canloadimage = true;
    // });   

  }




 onfileselected1(event) {
  console.log(event)
  this.selectedfile = event.target.files[0];
  console.log("done"+this.selectedfile)

  }

  onfileselected2(event) {

    this.selectedfile = event.target.files[0];
    console.log(this.selectedfile)

    }

    onfileselected3(event) {

      this.selectedfile = event.target.files[0];
      console.log(this.selectedfile)
   

      }

      onfileselected4(event) {
       
        this.selectedfile = event.target.files[0];
        console.log(this.selectedfile)
      
        }


  ngOnInit() {
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
    this.http.post('http://localhost:84/complaints/complaintlist',{"LoginKey":""+this.id}).subscribe(data => {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++) {
        const element = dat.issue[index];
        if(element.status === 'open')
          this.datas.push(element);
          console.log(this.datas)
         }
       
    });
  }

  addcomplaint(){
    this.addissue.LoginKey = ""+this.getFromLocal('user_id');
    this.addissue.complaint_from = this.getFromLocal('Name');
    this.addissue.status = "open"
    this.addissue.posted_on = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.addissue.LoginKey,this.addissue.complaint_from,this.addissue.complaint_type,this.addissue.description,this.addissue.posted_on,this.addissue.status,this.addissue.title);
    this.http.post('http://localhost:84/complaints/newcomplaints',{"LoginKey":this.addissue.LoginKey,"complaint_from":this.addissue.complaint_from,"title":this.addissue.title,"description":this.addissue.description,"status":this.addissue.status,"posted_on":this.addissue.posted_on,"complaint_type":this.addissue.complaint_type}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      this.ngOnInit();
      });
  }

  public open(event, item) {
    console.log(item.complaint_id);
    this.http.post('http://132.148.140.42:84/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    this.datass = data.issue;
    console.log(this.datass);
    });
  }
  public edit($event, item){
    console.log(item.complaint_id);
    this.http.post('http://132.148.140.42:84/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    this.datass = data.issue;
    console.log(this.datass);
    });
  }


  addapi1(){
    this.router.navigate(['main/listcomplaints'])
  }
  addapi2(){
    this.router.navigate(['main/completecomplaints'])
  }
  addapi3(){
    this.router.navigate(['main/closedcomplaints'])
  }

  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
   }
}



class Issue {
  complaint_from: string;
  poster_id: string;
  complaint_type: string;
  title: string;
  description: string;
  status: string;
  posted_on: string;
  created_at: Date;
  updated_at: Date;
  moved_by: string;
  moved_to: string;
  taken_by: string;
  complaint_id: number;
}

class Issuelist {
  issue: Issue[];
  attachments: any[];
  message: string;
  status: string;
  code: number;
}


class addissue {
  LoginKey:string;
  complaint_from:string;
  title:string;
  description:string;
  status:string;
  posted_on:string;
  complaint_type:string;
}