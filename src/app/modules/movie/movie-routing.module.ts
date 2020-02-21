import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieMainComponent } from './movie-main/movie-main.component';

const routes: Routes = [
    { path: 'movie/:name', component: MovieMainComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {}