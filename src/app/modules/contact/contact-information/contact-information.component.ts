import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faGMail = faGoogle;
  constructor(private scrollService: ScrollConfigService) { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return this.scrollService.getScrollConfig(element);
  }

}
