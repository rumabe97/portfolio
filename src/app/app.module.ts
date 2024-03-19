import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComingSoonComponent} from './shared/components/coming-soon/coming-soon.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CoreModule} from "./core/core.module";
import {NgsRevealModule} from "ngx-scrollreveal";
import { DarkModeToggleComponent } from './shared/components/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
    declarations: [
        AppComponent,
        ComingSoonComponent,
        DarkModeToggleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        NgsRevealModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
