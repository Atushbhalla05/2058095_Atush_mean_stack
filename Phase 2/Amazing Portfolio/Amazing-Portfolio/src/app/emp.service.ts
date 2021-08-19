
export class EmpService{
    fname:string = "";
    lname:string = "";
    username:string = "";
    password:string = "";
    portfolio = new Map<string, number>();

    constructor(fname:string,lname:string,username:string,password:string){
        this.fname=fname;
        this.lname=lname;
        this.username=username;
        this.password=password;
    }
 }