import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects-list/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {NgsRevealModule} from "ngx-scrollreveal";



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  exports: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    NgsRevealModule
  ]
})
export class ProjectModule { }
