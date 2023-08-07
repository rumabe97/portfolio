import {Component, OnInit} from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal/services/ngs-reveal-config";
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";

@Component({
    selector: 'app-start-info',
    templateUrl: './start-info.component.html',
    styleUrls: ['./start-info.component.scss']
})
export class StartInfoComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    getConfig(element: string): NgsRevealConfig {
        return getScrollConfig(element);
    }
}
