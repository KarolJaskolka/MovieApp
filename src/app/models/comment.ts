import { Movie } from './movie';
import { User } from './user';

export interface Comment {
    commentid: number;
    movieid: number;
    userid: number;
    title: string;
    description: string;
    date: string;
    movie: Movie;
    user: User;
}