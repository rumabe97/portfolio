import { Component, OnInit } from '@angular/core';
import {getScrollConfig} from "../../../shared/utils/ScrollRevealConfig";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";

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
