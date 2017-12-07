import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { GlobalEventBus, ADD_NEW_TODO, TODOS_AVAILABLE } from 'app/my-observer/event-bus';
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
    GlobalEventBus.notifyObservers(TODOS_AVAILABLE, itemsFeed.slice());    
  }

  addTodo(todoText: string) {
    GlobalEventBus.notifyObservers(ADD_NEW_TODO, todoText);
  }

}
