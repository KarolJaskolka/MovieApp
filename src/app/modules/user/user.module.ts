import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { UserCommentsComponent } from './comments/comments.component';
import { UserCommentComponent } from './comment/comment.component';
import { UserRatingsComponent } from './ratings/ratings.component';
import { UserRatingComponent } from './rating/rating.component';
import { UserInfoComponent } from './info/info.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ProfileComponent,
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
        ProfileComponent,
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