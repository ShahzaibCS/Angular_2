import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // nameList:string[];
  nameList:Array<string>;

  constructor() { 
    this.nameList = ['Leon','Bruce','Adam','Ben','Lee'];
  }

  ngOnInit() {
  }

}
