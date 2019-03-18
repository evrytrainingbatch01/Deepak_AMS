import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

import { User } from '../user.model';
import { Time } from '@angular/common';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  user:User;

  //boolean to toggle between UserDetail and UserList
  toggleView1: boolean = true;
  
  //list of model values
  values = [];

  public users = [];
  public errorMsg="";

  trackBy:number = 0;

  //time
  myTime: string = new Date().toLocaleTimeString();
  //date
  myDate: string = new Date().toLocaleDateString();

  ngOnInit() {
     
  }

  // onAdd() {
  //   this.values.push(this.feature);
  // }

  //onRemove this happens
  onRemove(v:any, index:number){
      // this.values.pop();
      this.values.splice(index, 1); // to remove particular value from *ngFor
  }

  onShowUserEntryDetail(){
    this.toggleView1 = true;
  }

  onShowUserList(){
    this.toggleView1 = false;
  }

  //onSubmit this happens
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    let response = Object.values(f.value);
    
       response[0].toString();
       response[1].toString();
       response[2].toString();
       response[3].toString();

    //  response.forEach(function (value) {
    //    console.log(value);
    //   });

      //  this.values.push(JSON.stringify(response));
      this.values.push(response);
  }

  // get currentUser() { return JSON.stringify(this.model); }

}
