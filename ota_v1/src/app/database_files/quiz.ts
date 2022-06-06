export class quiz
{
    qno:number;
    question:string;
    options:string[];
    answer:string;
    ansindex:number;
 
    constructor(qno: number, question: string,options:string[],answer: string,ansindex:number)
    {
        this.qno=qno;
        this.question=question;
        this.options=options;
        this.answer=answer;
        this.ansindex=ansindex;
    }
}