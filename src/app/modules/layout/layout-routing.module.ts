import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { LogInComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: FormComponent , children : [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LogInComponent},
    {path: 'register', component: SignUpComponent},
  ]},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }