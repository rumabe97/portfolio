import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects-list/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {NgxScrollrevealModule} from "../../ngx-scrollreveal/ngx-scrollreveal.module";



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
    NgxScrollrevealModule
  ]
})
export class ProjectModule { }
