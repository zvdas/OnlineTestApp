export class User {
    fullname:string;
    email:string;
    username:string;
    password:string;
    isAdmin:boolean;
    id:number;

    constructor(fullname:string, email:string, username:string, password:string, isAdmin:boolean, id:number){
        this.fullname = fullname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
        this.id = id;
    }
}