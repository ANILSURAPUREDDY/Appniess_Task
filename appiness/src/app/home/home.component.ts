import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListRepoComponent } from '../list-repo/list-repo.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  // users = [];
  dataSource : any;
  displayedColumns : string[] = ['S NO','UserName','URL'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service:ServiceService,private router:Router) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this.tableData()
  }

  tableData(){
    this.service.getAllUsers()
      .subscribe( data =>{
        this.dataSource = data;
    })

    setTimeout(() =>{
      this.dataSource = new MatTableDataSource(this.dataSource);  
      this.dataSource.paginator = this.paginator;
    },5000)
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getValue(value){
    console.log("value",value.login)
    var user = value.login;
    this.router.navigate(["userrepo",user])
  }

}
