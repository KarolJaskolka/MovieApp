import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieMainComponent } from './movie-main/movie-main.component';
import { MovieRankingComponent } from './movie-ranking/movie-ranking.component';

const routes: Routes = [
    { path: 'movie/:name', component: MovieMainComponent },
    { path: 'ranking', component: MovieRankingComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {}