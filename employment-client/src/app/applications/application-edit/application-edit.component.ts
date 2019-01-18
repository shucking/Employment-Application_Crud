import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application.model';
import { ApplicationService } from 'src/app/service/application.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css']
})

export class ApplicationEditComponent implements OnInit {

  editForm: FormGroup;
  application: Application

  constructor(private fb: FormBuilder, private router: Router, private as: ApplicationService) {}

  ngOnInit() {
    let appId = localStorage.getItem("editApp");
    if(!appId){
      alert("Invalid action.")
      this.router.navigate(['applications']);
      return;
    }

    this.editForm = this.fb.group({
      id: [],
      companyName: [''],
      position: [''],
      positionType: [''],
      status: [''],
      farthestProcess: [''],
      dateApplied: [''],
      dateResponse: [''],
      portalUser: [''],
      portalPass: [''],
      sourceApplication: ['']
    });

    this.as.getApplication(+appId).subscribe( data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.as.update(this.editForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['applications']);
      },
      error => {
        alert(error);
      });
  }
}
