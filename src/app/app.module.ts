import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './modules/layout/layout.module';
import { LayoutRoutingModule } from './modules/layout/layout-routing.module';

import { UserModule } from './modules/user/user.module';
import { UserRoutingModule } from './modules/user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule,
    UserRoutingModule,
    LayoutModule,
    UserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
