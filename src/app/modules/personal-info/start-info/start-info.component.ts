import {Component, OnInit} from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";

@Component({
    selector: 'app-start-info',
    templateUrl: './start-info.component.html',
    styleUrls: ['./start-info.component.scss']
})
export class StartInfoComponent implements OnInit {

    constructor(private scrollService: ScrollConfigService) {
    }

    ngOnInit(): void {
    }

    getConfig(element: string): NgsRevealConfig {
        return this.scrollService.getScrollConfig(element);
    }
}
