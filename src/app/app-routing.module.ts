import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path:"login",
  component:LoginComponent
},{
  path:'form',
  component:DetailsFormComponent
},{
  path:'users',
  component:UsersComponent
},{
  path:"header",
  component:HeaderComponent
},{
  path:'details',
  component:DetailsComponent
},{
  path:'',redirectTo:'/login',pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
