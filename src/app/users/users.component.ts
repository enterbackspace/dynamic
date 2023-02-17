import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[]
  constructor(public http:HttpClient){}
  ngOnInit(){
     this.user()
  }

    deleteuser(id:any){
      this.http.delete(`http://localhost:3000/users/${id}`).subscribe((data)=>{console.log(data)})
      this.user()
    }
    user(){
      this.http.get("http://localhost:3000/users").subscribe((res)=>{
        this.users=res
            })
            

    }


}
