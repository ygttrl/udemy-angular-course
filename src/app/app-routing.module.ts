import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:"home",
  component:HomeComponent,
},
{
  path:"user",
  component:UserComponent,
},
{
  path:"user/:id",
  component:UserDetailComponent,
},
{
  path:"role",
  component:RoleComponent,
},
{
  path:"**", //Eğer aranan şekilde bir url yoksa(component) Home sayfsına(Home Component)
  component:HomeComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
