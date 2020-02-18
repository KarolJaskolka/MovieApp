import { Rating } from './rating';
import { Comment } from './comment';

export interface User {
    login: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birth: string;
    avatar: string;
    comments: Array<Comment>;
    ratings: Array<Rating>;
}