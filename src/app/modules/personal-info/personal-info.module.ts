import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { StartInfoComponent } from './start-info/start-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {NgxScrollrevealModule} from "../../ngx-scrollreveal/ngx-scrollreveal.module";



@NgModule({
  declarations: [
    StartInfoComponent,
    AboutMeComponent
  ],
    imports: [
        CommonModule,
        NgxScrollrevealModule,
        NgOptimizedImage
    ]
    , exports: [
        StartInfoComponent,
        AboutMeComponent
    ]
})
export class PersonalInfoModule { }
