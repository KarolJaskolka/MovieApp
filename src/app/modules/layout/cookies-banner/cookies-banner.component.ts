import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-banner',
  templateUrl: './cookies-banner.component.html',
  styleUrls: ['./cookies-banner.component.scss']
})
export class CookiesBannerComponent implements OnInit {

  accepted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(){
    if(this.accepted) return 'hidden';
    return '';
  }

  accept(){
    this.accepted = true;
  }

}
