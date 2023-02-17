import { HttpClient } from '@angular/common/http';
import { Component,OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsFormComponent } from '../details-form/details-form.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(public http:HttpClient ,  
    private _diagouRef :MatDialog,
        ){}
  details:any=[]
  ngOnInit(){

this.getdetails()
  }
  deleteDetails(id:any){
    this.http.delete(`http://localhost:3000/Details/${id}`).subscribe({
      next:(res)=>{
        alert("employee deleted...!")
        this.getdetails()
      },error:console.log,
    }) 
  }
  getdetails(){
    this.http.get("http://localhost:3000/Details").subscribe((res)=>{
      this.details=res
    })
  }
   
navigate(){
  this._diagouRef.open(DetailsFormComponent)
}


  openaddempform(data:any){
    const diagouRef=this._diagouRef.open(DetailsFormComponent)
    diagouRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getdetails()
        }
      }
    })
    diagouRef.afterClosed().subscribe({
      next:(val:any)=>{
        if(val){
          this.getdetails()
        }
      }
    })

  }
  openeditForm(data:any){
    this._diagouRef.open(DetailsFormComponent,{
      data,
    })
    
  }
}
