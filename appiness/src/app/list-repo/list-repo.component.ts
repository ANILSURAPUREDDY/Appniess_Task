import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.sass']
})
export class ListRepoComponent implements OnInit {

  userName:String;
  list = <any>[];

  dataSource : any;
  displayedColumns : string[] = ['Id','FullName','ForksUrl'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router:Router,private route: ActivatedRoute,private service:ServiceService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    // console.log("this.router.getCurrentNavigation().extras",this.route.snapshot.paramMap.get('username'))
    this.tableData();
  }

  tableData(){
    var userName = this.route.snapshot.paramMap.get('username')
    this.service.getRepo(userName)
    .subscribe( data => {
      this.dataSource = data;
      console.log("asasa",this.list)
    })

    setTimeout(() =>{
      this.dataSource = new MatTableDataSource(this.dataSource);  
      this.dataSource.paginator = this.paginator;
    },5000)
  }

}
