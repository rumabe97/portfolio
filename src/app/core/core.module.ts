import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PersonalInfoModule} from "../modules/personal-info/personal-info.module";
import {ProjectModule} from "../modules/project/project.module";
import {ContactModule} from "../modules/contact/contact.module";
import {LazyLoadImageDirective} from "./directives/lazy-load-image.directive";


@NgModule({
    declarations: [
        MainLayoutComponent,
        LazyLoadImageDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        PersonalInfoModule,
        RouterModule,
        ProjectModule,
        ContactModule,
    ]
    ,
    exports: [
        LazyLoadImageDirective
    ]
})
export class CoreModule {
}
