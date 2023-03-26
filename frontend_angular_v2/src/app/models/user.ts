import { Answers } from "./answers";

export interface User {
    id: string;
    full_name: string;
    email: string;
    answers: Answers[];
}
