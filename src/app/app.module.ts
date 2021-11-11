import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
//import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user/user.component';
//import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgxSpinnerModule,
    MatSliderModule,
    //MatButtonModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      easing:"ease-in",
      closeButton:false,
      preventDuplicates:true,
      positionClass: "toast-bottom-left",
      progressAnimation:"decreasing"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
