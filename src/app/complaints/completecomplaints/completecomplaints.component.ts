import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-completecomplaints',
  templateUrl: './completecomplaints.component.html',
  styleUrls: ['./completecomplaints.component.scss']
})
export class CompletecomplaintsComponent implements OnInit {

  onlyThumbnailsGalleryOptions = [
    {
      'image': false,
      'height': '100px',
      'thumbnailSize': 'contain',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right',
      'width': '100%'
    }
  ];

  galleryImages = [
    {
      small: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
      medium: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
      big: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png'
    },
    {
      small: 'assets/images/ecommerce/images.jpeg',
      medium: 'assets/images/ecommerce/images.jpeg',
      big: 'assets/images/ecommerce/images.jpeg'
    },
    {
      small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
    }
  ];
  
  Open:any;
  Inprogree: any;
  Complete:any;
  All:any;
  counts:any;
  today:any;
  addissue:addissue;





  titles = [];
  datas = [];
  complaint_id:number;
  datass:any;
  data:any;
  cliid:string;
  your_id:string;
  moved_to:string;
  updated_at:string;
  status:string;
  id:number;
  name:string;

  
  urls = new Array<string>();
  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addissue = new addissue();
   
  }
  ngOnInit() {
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
    this.http.post('http://132.148.140.42:84/complaints/complaintlist',{"LoginKey":""+this.id}).subscribe(data => {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++) {
        const element = dat.issue[index];
        if(element.status === 'completed')
          this.datas.push(element);
         }
    });
  }


 

  addcomplaint(){
    this.addissue.LoginKey = ""+this.getFromLocal('user_id');
    this.addissue.complaint_from = this.getFromLocal('Name');
    this.addissue.status = "open"
    this.addissue.posted_on = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.addissue.LoginKey,this.addissue.complaint_from,this.addissue.complaint_type,this.addissue.description,this.addissue.posted_on,this.addissue.status,this.addissue.title);
    this.http.post('http://132.148.140.42:84/complaints/newcomplaints',{"LoginKey":this.addissue.LoginKey,"complaint_from":this.addissue.complaint_from,"title":this.addissue.title,"description":this.addissue.description,"status":this.addissue.status,"posted_on":this.addissue.posted_on,"complaint_type":this.addissue.complaint_type}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      this.ngOnInit();
      });



  }


  public Move(event, item) {
    this.http.post('http://132.148.140.42:84/complaints/updateStatus',{"complaint_id":""+item.complaint_id,"status":"closed"}).subscribe((data:any)  => {
      console.log(data);
      alert("Complaint Moved to Closed");
      this.ngOnInit();
      });
  }
  public open($event, item){
    console.log(item.complaint_id);
    this.router.navigate(['main/completedview/' + item.complaint_id])
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