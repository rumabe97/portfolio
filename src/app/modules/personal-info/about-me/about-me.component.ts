import { Component, OnInit } from '@angular/core';
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return getScrollConfig(element);
  }

}
