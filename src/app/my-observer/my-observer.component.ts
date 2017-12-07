import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { GlobalEventBus } from 'app/my-observer/event-bus';
import { itemsFeed } from 'app/shared/items-feed';

@Component({
  selector: 'app-my-observer',
  templateUrl: './my-observer.component.html',
  styleUrls: ['./my-observer.component.css']
})
export class MyObserverComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    GlobalEventBus.notifyObservers(itemsFeed.slice());    
  }

}
