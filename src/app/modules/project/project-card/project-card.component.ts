import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {IProject} from "../IProject";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
    // @ts-ignore
    @Input() project: IProject;
    @Input() isEven: number = 0;

    constructor(private renderer: Renderer2, private scrollService: ScrollConfigService) {
    }

    ngOnInit(): void {
    }

    getConfig(element: string): NgsRevealConfig {
        return this.scrollService.getScrollConfig(element);
    }

    onNavigate(url: string) {
        return `https://${url}`;
    }
}
