import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCommentsListComponent } from './user-comments-list/user-comments-list.component';
import { UserRatingsListComponent } from './user-ratings-list/user-ratings-list.component';
import { UserGuard } from 'src/app/guards/user.guard';

const routes:Routes = [
    { path: ':login', component: UserProfileComponent, canActivate: [UserGuard] },
    { path: ':login/comments', component: UserCommentsListComponent, canActivate: [UserGuard] },
    { path: ':login/ratings', component: UserRatingsListComponent, canActivate: [UserGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [UserGuard]
})

export class UserRoutingModule {}