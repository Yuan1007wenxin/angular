import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direxe',
  templateUrl: './direxe.component.html',
  styleUrls: ['./direxe.component.css']
})
export class DirexeComponent{
  constructor(){  }
  username:string;
  password:number;
  age:number;
  getAge(e){
    this.age=e.target.value;
  }

  users:Array<any>=[];
  doAdd(){
    this.users.push({"username":this.username,"password":this.password,"age":this.age});
  }
  doDelete(i){
    this.users.splice(i,1);
  }

}
