import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended = true;
  loaded = false;

  constructor() {
  }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
