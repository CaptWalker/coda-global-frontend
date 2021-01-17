import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../user.service';
import {User} from './../models/UserModel';
@Component({
  selector: 'app-page-one-dashboard',
  templateUrl: './page-one-dashboard.component.html',
  styleUrls: ['./page-one-dashboard.component.scss']
})
export class PageOneDashboardComponent implements OnInit {

  listOfUsers: User[];
  dataSource;
  displayedColumns: string[] = [ 'select', 'Profile Image', 'Name', 'Bet', 'Price' ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<User>(true, []);
  selectedUsers = [];
  showPage = false;

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.getUsers();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectingUser = () => {
    setTimeout(() => {
      this.selectedUsers = this.selection.selected;
    });
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row['Profile Image'] + 1}`;
  }

  getUsers = () => {
    this.service.getUsers().subscribe( (response: User[]) => {
      this.listOfUsers = response;
      // console.log(this.listOfUsers)
      this.dataSource = new MatTableDataSource(this.listOfUsers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    });
  }

  submitList = ($event) => {
    // console.log(this.selectedUsers);
    this.showPage = !this.showPage;
  }

}
