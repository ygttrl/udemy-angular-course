import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path:"",
  component: DataBindingComponent,
}
];


@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ]
})
export class DataBindingModule { }
