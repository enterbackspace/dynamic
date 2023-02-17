import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component'
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import {MatTableModule} from '@angular/material/table';
import{MatSnackBar, MatSnackBarModule}from '@angular/material/snack-bar'
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ClientSideComponent } from './client-side/client-side.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsFormComponent,
    UsersComponent,
    HeaderComponent,
    DetailsComponent,
    ClientSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    RouterModule,
    MatCardModule
    





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
