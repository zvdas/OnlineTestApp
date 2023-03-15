import { Options } from "./quiz/options";

export interface Quiz {
    id: string;
    question: string;
    options: string[];
    // options: Options[];
    answer: string;
    ansIndex: number;
}
