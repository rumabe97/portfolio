import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatInformationComponent } from './contat-information/contat-information.component';
import {NgsRevealModule} from "ngx-scrollreveal";



@NgModule({
    declarations: [
        ContatInformationComponent
    ],
    exports: [
        ContatInformationComponent
    ],
    imports: [
        CommonModule,
        NgsRevealModule
    ]
})
export class ContactModule { }
