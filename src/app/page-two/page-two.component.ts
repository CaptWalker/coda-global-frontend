import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/UserModel';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  @Input() selectedUsers: User[];
  @Input() listOfUsers: User[];

  randomPlayers: User[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedUsers);
    console.log(this.listOfUsers);
    this.generateRandomPlayers();
  }

  generateRandomPlayers = () => {
    while(this.randomPlayers.length !== 9){
      const user = this.listOfUsers[Math.floor(Math.random()*this.listOfUsers.length)];
      if(this.randomPlayers.indexOf(user) === -1){
        if(this.selectedUsers.indexOf(user) !== -1){
          user['Fate'] = 'Win';
          user.Price = (+user.Price*2).toString();
        }
        else{
          user['Fate'] = 'Loss'; 
          user.Price = '0'; 
        }
        this.randomPlayers.push(user);
      }
    }
    console.log(this.randomPlayers);
  }


}
