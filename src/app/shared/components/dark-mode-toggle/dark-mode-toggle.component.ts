import {Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit} from '@angular/core';
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";
import {ScrollConfigService} from "../../../core/services/scroll/scroll-config.service";
import {getWindow} from "ssr-window";

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit, AfterViewInit {
  @ViewChild('darkModeToggle') darkModeToggle!: ElementRef<HTMLInputElement>;
  @ViewChild('darkInput') darkModeToggleInput!: ElementRef<HTMLInputElement>;
  constructor(private _renderer: Renderer2, private scrollService: ScrollConfigService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (getWindow().matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkModeToggleInput.nativeElement.checked = true;
      this.changeModeDom(true);
    }
  }
  getConfig(element: string): NgsRevealConfig {
    return this.scrollService.getScrollConfig(element);
  }

  changeMode(){
    const isChecked: boolean = this.darkModeToggleInput.nativeElement.checked;
    this.changeModeDom(isChecked);
  }
  private changeModeDom(isDark:boolean){
    this.darkModeToggle.nativeElement.dataset['darkMode'] = isDark + '';
    this._renderer.removeClass(document.body, isDark ? 'light' : 'dark');
    this._renderer.addClass(document.body, isDark ? 'dark': 'light');
  }
}
