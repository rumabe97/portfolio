import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal/services/ngs-reveal-config";
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";
import {projects} from "./mockValues";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList = projects;
  constructor() { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return getScrollConfig(element);
  }

}
