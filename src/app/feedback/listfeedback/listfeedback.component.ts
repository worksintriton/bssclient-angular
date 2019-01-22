
import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.scss']
})
export class ListfeedbackComponent implements OnInit {

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








id:number;
name:number;
feedbacklist:feedbacklist;
addfeedback:addfeedback;
datass:any;

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
  
    this.feedbacklist = new feedbacklist();
    this.addfeedback = new addfeedback ();
    this.datass = [];


    
  }
  ngOnInit() {
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
    this.http.post('http://localhost:84/feebdack/listmyfeedback',{"LoginKey":""+this.id}).subscribe((data:any) => {
      this.datass=data.data;  
      console.log(this.datass)     
    });
  }

  addfeedbacks(){
    this.addfeedback.posted_by = ""+this.getFromLocal('user_id');
    this.addfeedback.company_name = this.getFromLocal('Name');
    this.addfeedback.posted_on = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.http.post('http://localhost:84/feebdack/listmyfeedback',this.addfeedback).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      this.ngOnInit();
      });
  }
  
  public open(event, item) {
    console.log(item.complaint_id);
    this.http.post('http://132.148.140.42:84/feebdack/fetchfeedback',{id:item.id}).subscribe((data:any)  => {
    this.datass = data.issue;
    console.log(this.datass);
    });
  }


  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
   }
}



class feedbacklist {
  id:string;
  title:string;
  description:string;
  rating:string;
  posted_on:string;
  posted_by:string;
  image:string;
  company_name:string;
}


class addfeedback {
  title:string;
  description:string;
  rating:string;
  posted_on:string;
  posted_by:string;
  image:string;
  company_name:string;
}