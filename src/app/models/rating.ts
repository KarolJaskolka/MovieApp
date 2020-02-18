import { User } from './user';
import { Movie } from './movie';

export interface Rating {
    ratingid: number;
    userid: number;
    movieid: number;
    stars: number;
    date: string;
    user: User;
    movie: Movie;
}