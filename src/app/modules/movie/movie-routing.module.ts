import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieMainComponent } from './movie-main/movie-main.component';
import { MovieRankingComponent } from './movie-ranking/movie-ranking.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
    { path: 'movie/:name', component: MovieMainComponent },
    { path: 'ranking', component: MovieRankingComponent},
    { path: 'search', component: MovieSearchComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {}