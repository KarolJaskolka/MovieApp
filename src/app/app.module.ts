import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './modules/layout/layout.module';
import { LayoutRoutingModule } from './modules/layout/layout-routing.module';

import { UserModule } from './modules/user/user.module';
import { UserRoutingModule } from './modules/user/user-routing.module';

import { MovieRoutingModule } from './modules/movie/movie-routing.module';
import { MovieModule } from './modules/movie/movie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutRoutingModule,
    MovieRoutingModule,
    UserRoutingModule,
    LayoutModule,
    MovieModule,
    UserModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
