import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxScrollrevealModule} from "../../ngx-scrollreveal/ngx-scrollreveal.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ContactInformationComponent} from "./contact-information/contact-information.component";



@NgModule({
    declarations: [
        ContactInformationComponent
    ],
    exports: [
        ContactInformationComponent
    ],
    imports: [
        CommonModule,
        NgxScrollrevealModule,
        FontAwesomeModule
    ]
})
export class ContactModule { }
