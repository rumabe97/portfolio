import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {defaultProps, targetElements} from "../../../shared/data/ScrollRevealData";
import {isPlatformBrowser} from "@angular/common";
@Injectable({
    providedIn: 'root'
})
export class ScrollConfigService {

    constructor(@Inject(PLATFORM_ID) private platformId: object) {
    }

    getScrollConfig(element: string): NgsRevealConfig {
        if (!isPlatformBrowser(this.platformId)) return defaultProps;
        let config: NgsRevealConfig = {};

        const principalKeys = Object.keys(defaultProps);
        principalKeys.forEach((key: string) => {
            // @ts-ignore
            config[key as keyof NgsRevealConfig] = defaultProps[key];
        });
        const specificValues = targetElements.find(value => value.element === element);
        if (specificValues) {
            const animation = specificValues.animation;
            const specificKeys = Object.keys(animation);
            specificKeys.forEach((key: string) => {
                // @ts-ignore
                config[key as keyof NgsRevealConfig] = animation[key];
            });
        }
        return config;
    }
}
