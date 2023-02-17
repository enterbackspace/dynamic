import {   HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
import { MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent{
empForm:FormGroup
  education:string[]=[
    "matric",
    "diploma",
    "interMediate",
    "Graduate",
    "post_Graduate"
  ]
  constructor(public fb:FormBuilder ,
    private http:HttpClient ,
    public service:ServicesService,
    public matdial:MatDialogRef<DetailsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any

    ){
    this.empForm=this.fb.group({
      firstname:'',
      lastname:'',
      G_mail:'',
      Company:'',
    Education:'',
    })
  }
  
 ngOnInit(): void {
   this.empForm.patchValue(this.data)
 }
       
 submit(){
          if(this.empForm.valid){
          
            if(this.data){
            this.service.updatedetails(this.empForm.value,this.data.id)
              .subscribe({
                next:(val:any)=>{
                 alert('Details updated succcesfully')
                 this.matdial.close(true)
                },
               error:(err:any)=>{
                   console.log(err)
               }
              }) 
            }else{
              this.service.addDetails(this.empForm.value)
              .subscribe({
                next:(val:any)=>{
                 alert('Details submitted ')
                 this.matdial.close(true)
                },
               error:(err:any)=>{
                   console.log(err)
               }
              }) 
            }
            }
            
          }
          
  }


