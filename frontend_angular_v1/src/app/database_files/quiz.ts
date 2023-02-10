export class quiz
{
    question:string;
    options:string[];
    answer:string;
    ansindex:number;
 
    constructor(question: string,options:string[],answer: string,ansindex:number)
    {
        this.question=question;
        this.options=options;
        this.answer=answer;
        this.ansindex=ansindex;
    }
}