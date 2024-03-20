import { Component, OnInit } from '@angular/core';
import {projects} from "./mockValues";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList = projects;
  constructor(private scrollService: ScrollConfigService) { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return this.scrollService.getScrollConfig(element);
  }

}
