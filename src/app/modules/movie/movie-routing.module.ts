import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './main/movie.component';

const routes: Routes = [
    { path: 'movie/:name', component: MovieComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {}