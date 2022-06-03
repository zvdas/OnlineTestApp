import { Options } from "./options";

export class Quiz {
    question:string;
    options:Options[];
    answer:string;
    ansindex:number;
    id: number;

    constructor(question:string, options:Options[], answer:string, ansindex:number, id:number){
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.ansindex = ansindex;
        this.id = id;
    }

}