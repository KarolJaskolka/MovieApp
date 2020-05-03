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
import { MovieNewCommentComponent } from './movie-new-comment/movie-new-comment.component';
import { MovieRatingFloatingButtonComponent } from './movie-rating-floating-button/movie-rating-floating-button.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';

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
        MovieSearchComponent,
        MovieNewCommentComponent,
        MovieRatingFloatingButtonComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        MovieRoutingModule
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
        MovieSearchComponent,
        MovieNewCommentComponent
    ],
    providers: [],
    bootstrap: []
})

export class MovieModule {}