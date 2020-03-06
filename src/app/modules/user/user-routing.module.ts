import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCommentsListComponent } from './user-comments-list/user-comments-list.component';
import { UserRatingsListComponent } from './user-ratings-list/user-ratings-list.component';

const routes:Routes = [
    { path: 'user/:login', component: UserProfileComponent },
    { path: 'user/:login/comments', component: UserCommentsListComponent},
    { path: 'user/:login/ratings', component: UserRatingsListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}