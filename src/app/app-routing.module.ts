import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [{
  path:"home",
  loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
},
{
  path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)
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
