import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/UserModel';

@Component({
  selector: 'app-selected-user-table',
  templateUrl: './selected-user-table.component.html',
  styleUrls: ['./selected-user-table.component.scss']
})
export class SelectedUserTableComponent implements OnInit, OnChanges {

  @Input() selectedUsers: User[];
  @Output() submitList = new EventEmitter();

  constructor() { }
  
  ngOnChanges(): void {
    // console.log(this.selectedUsers);  
  }

  ngOnInit(): void {
    this.selectedUsers
    // console.log(this.selectedUsers);
  }

  submit = () => {
    this.submitList.emit();
  }


}
