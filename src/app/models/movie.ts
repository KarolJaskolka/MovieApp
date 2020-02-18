import { Rating } from './rating';
import { Comment } from './comment';

export interface Movie {
    movieid: number;
    title: string;
    name: string;
    director: string;
    genre: string;
    releasedate: string;
    duration: number;
    description: string;
    rating: number;
    poster: string;
    comments: Array<Comment>;
    ratings: Array<Rating>
}