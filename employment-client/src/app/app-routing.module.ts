import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApplicationAddComponent } from './applications/application-add/application-add.component';
import { ApplicationListComponent } from './applications/application-list/application-list.component';
import { ApplicationEditComponent } from './applications/application-edit/application-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/applications", pathMatch: "full"},
  { path: "applications", component: ApplicationListComponent},
  { path: "applications-add", component: ApplicationAddComponent},
  { path: "applications-edit", component: ApplicationEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
