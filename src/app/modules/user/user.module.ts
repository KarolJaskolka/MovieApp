import { NgModule } from '@angular/core';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { UserRatingComponent } from './user-rating/user-rating.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        UserProfileComponent,
        UserCommentsComponent,
        UserCommentComponent,
        UserRatingsComponent,
        UserRatingComponent,
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        UserProfileComponent,
        UserCommentsComponent,
        UserCommentComponent,
        UserRatingsComponent,
        UserRatingComponent,
        UserInfoComponent
    ],
    providers: [],
    bootstrap: []
})

export class UserModule {}