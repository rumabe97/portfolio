import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartInfoComponent } from './start-info/start-info.component';



@NgModule({
  declarations: [
    StartInfoComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports: [
      StartInfoComponent
  ]
})
export class PersonalInfoModule { }
