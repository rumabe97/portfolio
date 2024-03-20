import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatInformationComponent } from './contat-information/contat-information.component';
import {NgxScrollrevealModule} from "../../ngx-scrollreveal/ngx-scrollreveal.module";



@NgModule({
    declarations: [
        ContatInformationComponent
    ],
    exports: [
        ContatInformationComponent
    ],
    imports: [
        CommonModule,
        NgxScrollrevealModule
    ]
})
export class ContactModule { }
