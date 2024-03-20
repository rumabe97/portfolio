import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private scrollService: ScrollConfigService) { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return this.scrollService.getScrollConfig(element);
  }

}
