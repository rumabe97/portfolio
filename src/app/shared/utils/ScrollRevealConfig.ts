import {defaultProps, targetElements} from "../data/ScrollRevealData";
import {NgsRevealConfig} from "../../ngx-scrollreveal/services";

export function getScrollConfig(element: string): NgsRevealConfig {
    let config:NgsRevealConfig = {};

    const principalKeys = Object.keys(defaultProps);
    principalKeys.forEach( (key:string) =>{
        // @ts-ignore
        config[key as keyof NgsRevealConfig] = defaultProps[key];
    });
    const specificValues = targetElements.find(value => value.element === element);
    if(specificValues) {
        const animation = specificValues.animation;
        const specificKeys = Object.keys(animation);
        specificKeys.forEach( (key:string) =>{
            // @ts-ignore
            config[key as keyof NgsRevealConfig] = animation[key];
        });
    }
    return config;
}
