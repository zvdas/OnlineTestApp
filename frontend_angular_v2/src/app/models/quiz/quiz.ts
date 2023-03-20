import { Options } from "./options";

export class Quiz {
    question:string;
    options:Options[];
    answer:string;
    ansIndex:number;
    id: number;

    constructor(question:string, options:Options[], answer:string, ansIndex:number, id:number){
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.ansIndex = ansIndex;
        this.id = id;
    }

}