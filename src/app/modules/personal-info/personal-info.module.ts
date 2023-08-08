import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartInfoComponent } from './start-info/start-info.component';
import {NgsRevealModule} from "ngx-scrollreveal";
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    StartInfoComponent,
    AboutMeComponent
  ],
    imports: [
        CommonModule,
        NgsRevealModule
    ]
    , exports: [
        StartInfoComponent,
        AboutMeComponent
    ]
})
export class PersonalInfoModule { }
