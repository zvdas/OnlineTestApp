export class answer
{
    selectedOption:string;
    answerStatus:string;
    answerScore:number;

    constructor(selectedOption:string,answerStatus:string,answerScore:number)
    {
        this.selectedOption =   selectedOption;
        this.answerStatus   =   answerStatus;
        this.answerScore    =   answerScore;
    }

}