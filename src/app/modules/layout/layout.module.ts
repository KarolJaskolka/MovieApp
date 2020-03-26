import { NgModule } from "@angular/core";

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { LogoComponent } from './logo/logo.component';
import { LogInComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeMovieComponent } from './home-movie/home-movie.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { BurgerComponent } from './burger/burger.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        FormComponent,
        SearchComponent,
        AccountComponent,
        LogoComponent,
        LogInComponent,
        SignUpComponent,
        HomeMovieComponent,
        SuccessComponent,
        BurgerComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LayoutRoutingModule
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        FormComponent,
        SearchComponent,
        AccountComponent,
        LogoComponent,
        LogInComponent,
        SignUpComponent,
        HomeMovieComponent,
        SuccessComponent,
        BurgerComponent
    ],
    providers: [],
    bootstrap: []
})

export class LayoutModule {}