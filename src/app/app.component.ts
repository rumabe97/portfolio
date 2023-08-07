import {Component, OnInit} from '@angular/core';
import {initTiltAnimation} from "./shared/utils/InintTiltAnimation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  ngOnInit(): void {
    initTiltAnimation();
  }
}
