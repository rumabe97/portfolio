import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgsRevealDirective, NgsRevealSetDirective} from './directives';

export {WindowService, NgsRevealService, NgsRevealConfig} from './services/index';

/**
 * Main module of the library
 */
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [NgsRevealDirective, NgsRevealSetDirective],
    declarations: [NgsRevealDirective, NgsRevealSetDirective]
})
export class NgxScrollrevealModule {
}
