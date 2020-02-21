import { NgModule } from '@angular/core';

import { MovieMainComponent } from './movie-main/movie-main.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieUserRatingComponent } from './movie-user-rating/movie-user-rating.component';
import { MovieCommentComponent } from './movie-comment/movie-comment.component';


@NgModule({
    declarations: [
        MovieMainComponent,
        MovieHeaderComponent,
        MovieCommentsComponent,
        MovieInfoComponent,
        MovieUserRatingComponent,
        MovieCommentComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        MovieMainComponent,
        MovieHeaderComponent,
        MovieCommentsComponent,
        MovieInfoComponent,
        MovieUserRatingComponent,
        MovieCommentComponent
    ],
    providers: [],
    bootstrap: []
})

export class MovieModule {}