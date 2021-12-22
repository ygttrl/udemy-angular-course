import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule
  ],
  exports: [Child1Component,FormsModule]
})
export class ChildModule { }
