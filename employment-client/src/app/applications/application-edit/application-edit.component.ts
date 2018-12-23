import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application.model';
import { ApplicationService} from 'src/app/service/application.service';
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css']
})

export class ApplicationEditComponent implements OnInit {

  editForm: FormGroup;
  application: Application
  _id: number;
  companyName: string;
  position: string;
  positionType: string;
  status: string;
  farthestProcess: string;
  dateApplied: string;
  dateResponse: string;
  portalUser: string;
  portalPass: string;
  sourceApplication: string;
  isLoadingResults = false;

  constructor(private fb: FormBuilder, private router: Router, private as: ApplicationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getApplication(this.route.snapshot.params['id']);
    this.editForm = this.fb.group( {
      companyName: [null],
      position: [null],
      positionType: [null],
      status: [null],
      farthestProcess: [null],
      dateApplied: [null],
      dateResponse: [null],
      portalUser: [null],
      portalPass: [null],
      sourceApplication: [null]
      });
  }

  getApplication(id) {
    this.as.getApplication(id).subscribe(data => {
      this._id = data.id;
      this.editForm.setValue( {
        companyName: data.companyName,
        position: data.position,
        positionType: data.positionType,
        status: data.status,
        farthestProcess: data.farthestProcess,
        dateApplied: data.dateApplied,
        dateResponse: data.dateResponse,
        portalUser: data.portalUser,
        portalPass: data.portalPass,
        sourceApplication: data.sourceApplication
      });
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
