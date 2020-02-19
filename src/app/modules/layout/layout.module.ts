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

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
        SignUpComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
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
        SignUpComponent
    ],
    providers: [],
    bootstrap: []
})

export class LayoutModule {}