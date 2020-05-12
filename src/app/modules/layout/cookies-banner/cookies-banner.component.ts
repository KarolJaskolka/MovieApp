import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cookies-banner',
  templateUrl: './cookies-banner.component.html',
  styleUrls: ['./cookies-banner.component.scss']
})
export class CookiesBannerComponent implements OnInit {

  accepted: boolean = false;

  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
    if(this.storageService.getCookiesConsent() === 'accepted'){
      this.accepted = true;
    }
  }

  getClass(){
    if(this.accepted) return 'hidden';
    return '';
  }

  accept(){
    this.accepted = true;
    this.storageService.acceptCookies();
  }

}
