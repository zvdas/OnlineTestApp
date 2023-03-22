import { Options } from "./options";

export interface Quiz {
    id: string;
    question: string;
    // options: string[];
    // options: Options[];
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    answer: string;
    ansIndex: number;
}
