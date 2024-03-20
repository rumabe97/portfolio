import { Component, OnInit } from '@angular/core';
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";
import {projects} from "./mockValues";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";

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
