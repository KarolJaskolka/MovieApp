import { NgModule } from '@angular/core';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { UserRatingComponent } from './user-rating/user-rating.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserCommentsListComponent } from './user-comments-list/user-comments-list.component';
import { UserRatingsListComponent } from './user-ratings-list/user-ratings-list.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        UserProfileComponent,
        UserCommentsComponent,
        UserCommentComponent,
        UserRatingsComponent,
        UserRatingComponent,
        UserInfoComponent,
        UserCommentsListComponent,
        UserRatingsListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserRoutingModule
    ],
    exports: [
        UserProfileComponent,
        UserCommentsComponent,
        UserCommentComponent,
        UserRatingsComponent,
        UserRatingComponent,
        UserInfoComponent,
        UserCommentsListComponent,
        UserRatingsListComponent
    ],
    providers: [],
    bootstrap: []
})

export class UserModule {}