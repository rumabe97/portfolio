import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartInfoComponent } from './start-info/start-info.component';
import {NgsRevealModule} from "ngx-scrollreveal";



@NgModule({
  declarations: [
    StartInfoComponent
  ],
    imports: [
        CommonModule,
        NgsRevealModule
    ]
    ,exports: [
      StartInfoComponent
  ]
})
export class PersonalInfoModule { }
