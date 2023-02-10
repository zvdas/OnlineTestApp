export class participant
{
    id:number;
    fullname:string;
    emailid:string;
    uname:any;
    pword:any;
    
    constructor(id:number,fullname:string,emailid:string,uname:any,pword:any)
    {
        this.id=id;
        this.fullname=fullname;
        this.emailid=emailid;
        this.uname=uname;
        this.pword=pword;
    }
}