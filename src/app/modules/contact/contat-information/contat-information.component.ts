import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";

@Component({
  selector: 'app-contat-information',
  templateUrl: './contat-information.component.html',
  styleUrls: ['./contat-information.component.scss']
})
export class ContatInformationComponent implements OnInit {

  constructor(private scrollService: ScrollConfigService) { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return this.scrollService.getScrollConfig(element);
  }

}
