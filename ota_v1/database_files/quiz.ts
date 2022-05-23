export class quiz
{
    static answer(answer: any) {
      throw new Error('Method not implemented.');
    }
    id:number;
    question:string;
    options:string[]=[];
    answer:string;
    ansindex:number;
 
    constructor(id: number,question: string,options:string[],answer: string,ansindex:number)
    {
        this.id=id;
        this.question=question;
        this.options=options;
        this.answer=answer;
        this.ansindex=ansindex;
    }
}