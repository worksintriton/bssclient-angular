import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
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

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
