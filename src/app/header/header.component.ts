import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsFormComponent } from '../details-form/details-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  toggleStatus:boolean=true;
  constructor(public router:Router,public dialog:MatDialog){}
 
   navigate(){
    this.dialog.open(DetailsFormComponent)
   }

}
