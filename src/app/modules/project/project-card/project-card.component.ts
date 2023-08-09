import {Component, Input, OnInit} from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal/services/ngs-reveal-config";
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";
import {initTiltAnimation} from "../../../shared/utils/InintTiltAnimation";
import {IProject} from "../IProject";

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
    // @ts-ignore
    @Input() project: IProject;
    @Input() isEven: number = 0;

    constructor() {
    }

    ngOnInit(): void {
        initTiltAnimation();
    }

    getConfig(element: string): NgsRevealConfig {
        return getScrollConfig(element);
    }

    onNavigate(url: string) {
        window.open(`https://${url}`, "_blank");
    }
}
