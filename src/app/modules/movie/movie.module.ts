import { NgModule } from '@angular/core';

import { MovieMainComponent } from './movie-main/movie-main.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieUserRatingComponent } from './movie-user-rating/movie-user-rating.component';
import { MovieCommentComponent } from './movie-comment/movie-comment.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovieRankingComponent } from './movie-ranking/movie-ranking.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MovieMainComponent,
        MovieHeaderComponent,
        MovieCommentsComponent,
        MovieInfoComponent,
        MovieUserRatingComponent,
        MovieCommentComponent,
        MovieViewComponent,
        MovieRankingComponent,
        MovieSearchComponent
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
        MovieCommentComponent,
        MovieViewComponent,
        MovieRankingComponent,
        MovieSearchComponent
    ],
    providers: [],
    bootstrap: []
})

export class MovieModule {}