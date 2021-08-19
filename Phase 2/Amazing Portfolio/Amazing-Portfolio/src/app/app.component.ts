import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazing-Portfolio';

  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  });

  registrationForm = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  });


  currUsername = "";
  currEmpInformation:EmpService = new EmpService("","","","");

  saveInfo = new FormGroup({
    contactName:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
  })


  empInformation:Array<EmpService> = new Array();

  msg:string="";

  showLogin:boolean = true;
  showRegister:boolean = false;
  showInfo:boolean = false;
  registerError: string="";
  
  loginToRegister(){
    this.showLogin = false;
    this.showRegister = true;
    this.showInfo = false;
  }
  
  registerToLogin(){
    this.showLogin = true;
    this.showRegister = false;
    this.showInfo = false;
  }

  loginToInfo(){
    this.showInfo = true;
    this.showRegister = false;
    this.showLogin = false;
  }
  checkUser(){
    let login = this.loginRef.value;
    for(let emp of this.empInformation){
      if(emp.username == login.user && emp.password == login.pass){
       // console.log("run Employee")
        this.currUsername = login.user;
        this.currEmpInformation = emp;
        this.loginToInfo();
        return;
      }
    }
    this.msg = "Incorrect username or password";
  }
  addUser(){
    let empUNames:Array<string> = new Array();
    for(let emp of this.empInformation){
      empUNames.push(emp.username);
    }
    let passedUser = this.registrationForm.value;
    if(passedUser.user in empUNames == true){
      this.registerError = "Passed User already exists";
    }
    else{
      this.empInformation.push(new EmpService(passedUser.fname,passedUser.lname,passedUser.user,passedUser.pass));
      this.registerToLogin();
    }
    console.log(this.empInformation);
  }

  addContact(){
    let contact = this.saveInfo.value;
    this.currEmpInformation.portfolio.set(contact.contactName,contact.phone);
  }
}
