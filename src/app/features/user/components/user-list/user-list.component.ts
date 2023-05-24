import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //create a variable to store the user data
  user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
