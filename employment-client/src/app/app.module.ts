import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { ApplicationListComponent } from './applications/application-list/application-list.component';
import { ApplicationAddComponent } from './applications/application-add/application-add.component';
import { ApplicationEditComponent } from './applications/application-edit/application-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationService } from './service/application.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicationListComponent,
    ApplicationAddComponent,
    ApplicationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
