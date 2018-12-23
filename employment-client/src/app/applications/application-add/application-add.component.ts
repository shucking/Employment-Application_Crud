import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/service/application.service';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.css']
})
export class ApplicationAddComponent implements OnInit{
  constructor(private fb: FormBuilder, private router: Router, private as: ApplicationService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      positionType: ['', Validators.required],
      status: ['', Validators.required],
      farthestProcess: [''],
      dateApplied: ['', Validators.required],
      dateResponse: [''],
      portalUser: [''],
      portalPass: [''],
      sourceApplication: ['', Validators.required]
    })
  }

  onSubmit() {
    this.as.add(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['applications'])
    });
  }
}