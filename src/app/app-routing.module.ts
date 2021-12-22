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
  path:"data-binding",
  loadChildren:() => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
},
{
  path:"storage",
  loadChildren:() => import('./storage/storage.module').then(m => m.StorageModule)
},
{
  path:"role",
  component:RoleComponent,
},
{
  path:"Directives", //Eğer aranan şekilde bir url yoksa(component) Home sayfsına(Home Component)
  loadChildren:() => import('./directives/directives.module').then(m => m.DirectivesModule)
},
{
  path:"pipes", //Eğer aranan şekilde bir url yoksa(component) Home sayfsına(Home Component)
  loadChildren:() => import('./pipes/pipes.module').then(m => m.PipesModule)
},
{
  path:"parents", //Eğer aranan şekilde bir url yoksa(component) Home sayfsına(Home Component)
  loadChildren:() => import('./parents/parents.module').then(m => m.ParentsModule)
},
{
  path:"**", //Eğer aranan şekilde bir url yoksa(component) Home sayfsına(Home Component)
  loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
