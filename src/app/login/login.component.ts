import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  passworde:boolean=true
visibility(){
  this.passworde=!this.passworde


}

  constructor(public http:HttpClient,public router:Router,public ss:ServicesService){}
  ngOnInit():void{
    this.http.get("http://localhost:3000/Details").subscribe((res)=>{
      console.log(res)
    })
  }
  DetailsForm =new FormGroup({
    username :  new FormControl('',[Validators.required, Validators.minLength(8), Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])                                 })

  login(){
    this.http.post("http://localhost:3000/users",this.DetailsForm.value).subscribe((res)=>{
      console.log(res)
    })
    this.navigate()
  }
 
  navigate(){
    this.router.navigate(['/header'])
  }
// emailnotAllowed(control:FormControl):Promise<any> | Observable<any>{
//   const response = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(control.value==='pramod@gmail.com'){
//         resolve({emailnotAllowed:true})

//       }else{
//         resolve(null)
//       }
//     },3000)

//   })


// return response

// }
  
    

  
}
 