export class User {

      username: string;
      password: string;
      entryTime: Date;
      exitTime: Date;
     

    constructor(username: string, password: string, entryTime: Date, exitTime: Date) { 
      this.username=username;
      this.password=password;
      this.entryTime=entryTime;
      this.exitTime=exitTime;
    }

  setUsername(username:string){
    this.username=username;
  }

  setPassword(password:string){
    this.password=password;
  }

  setEntryTime(entryTime:Date){
    this.entryTime=entryTime;
  }

  setExitTime(exitTime:Date){
    this.exitTime=exitTime;
  }

}