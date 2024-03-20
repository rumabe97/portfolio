import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
    NgxScrollrevealModule,
    NgOptimizedImage
  ]
})
export class ProjectModule { }
