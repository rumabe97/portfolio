import {Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
import {getScrollConfig} from "../../utils/ScrollRevealConfig";
import {NgsRevealConfig} from "../../../ngx-scrollreveal/services";

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  @ViewChild('darkModeToggle') darkModeToggle!: ElementRef<HTMLInputElement>;
  @ViewChild('darkInput') darkModeToggleInput!: ElementRef<HTMLInputElement>;
  constructor(private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  getConfig(element: string): NgsRevealConfig {
    return getScrollConfig(element);
  }

  changeMode(){
    const isChecked: boolean = this.darkModeToggleInput.nativeElement.checked;
    this.darkModeToggle.nativeElement.dataset['darkMode'] = isChecked + '';
    this._renderer.removeClass(document.body, isChecked ? 'light' : 'dark');
    this._renderer.addClass(document.body, isChecked ? 'dark': 'light');
  }
}
