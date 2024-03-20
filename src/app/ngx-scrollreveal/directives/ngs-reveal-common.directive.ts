import { NgsRevealConfig } from '../services';
import {NgsRevealService} from "../services";

/**
 * Base directive class shared by the concrete ScrollReveal directives.
 */
export abstract class AbstractNgsRevealDirective {

    config!: NgsRevealConfig;

    constructor(protected ngsRevealService: NgsRevealService) { }

    protected _initConfig(value: string | NgsRevealConfig): void {
        if (value && typeof value === 'string') {
            this.config = JSON.parse(value);
        } else if (value && typeof value === 'object') {
            this.config = value;
        }
    }
}
