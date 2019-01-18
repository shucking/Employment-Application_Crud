import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application.model';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/service/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications: Application[];

  constructor(private router: Router, private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getAll()
      .subscribe( data => {
        console.log(data);
        this.applications = data;
      });
  }

  delete(application: Application): void {
    this.appService.delete(application.id)
      .subscribe( data => {
        console.log(data)
        this.applications = this.applications.filter(app => app !== application);
      });
  };

  edit(application: Application): void {
    localStorage.removeItem("editApp");
    localStorage.setItem("editApp", application.id.toString());
    this.router.navigate(['applications-edit']);
  }

  add(): void {
    console.log("in add application")
    this.router.navigate(['application-add']);
  };
}
