import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal/services/ngs-reveal-config";
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";

@Component({
  selector: 'app-contat-information',
  templateUrl: './contat-information.component.html',
  styleUrls: ['./contat-information.component.scss']
})
export class ContatInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return getScrollConfig(element);
  }

}
