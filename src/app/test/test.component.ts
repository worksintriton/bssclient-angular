import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { read } from 'fs';
import { ReadVarExpr } from '@angular/compiler';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  titles = [];
  datas: any;
  datass:any = {};
  faq_id:string;
  urls = new Array<string>();

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  detectFiles(event) {
    console.log()
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
        console.log(this.urls);

      }
    }
  }

}
