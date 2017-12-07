import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-events',
  templateUrl: './browser-events.component.html',
  styleUrls: ['./browser-events.component.css']
})
export class BrowserEventsComponent implements OnInit {

  clicks:number = 0;
  cords:string;

  mousemoveContainer: HTMLElement;
  clickButton: HTMLElement;

  clickFn: any;
  updateCordsFn: any;

  constructor() { 
  }

  ngOnInit() {
    this.clickButton = document.getElementById('click');
    // pytanie: dlaczego poniższa linia nie zadziała?
    // this.clickButton.addEventListener('click', this.click);
    this.clickFn = this.click.bind(this);
    this.clickButton.addEventListener('click', this.clickFn);

    this.updateCordsFn = this.updateCords.bind(this);
    this.mousemoveContainer = document.getElementById('mousemove-container');
    this.mousemoveContainer.addEventListener('mousemove', this.updateCordsFn);
  }

  click(event: Event) {
    this.clicks++;
  }

  updateCords(event: MouseEvent) {
    this.cords = `X: ${event.clientX} Y: ${event.clientY}`;
  }

  removeListeners() {
    this.mousemoveContainer.removeEventListener('mousemove', this.updateCordsFn);
    this.clickButton.removeEventListener('click', this.clickFn);
  }

}
