import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { GlobalEventBus, ADD_NEW_TODO, TODOS_AVAILABLE } from 'app/my-observer/event-bus';
import { itemsFeed } from 'app/shared/items-feed';
import { setInterval } from 'timers';

@Component({
  selector: 'app-my-observer',
  templateUrl: './my-observer.component.html',
  styleUrls: ['./my-observer.component.css']
})
export class MyObserverComponent implements OnInit {

  items: Item[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.items = itemsFeed.slice();
    GlobalEventBus.notifyObservers(TODOS_AVAILABLE, this.items);
    // simulate server call
    setInterval(() => {
      let id = Math.random();
      this.items.push({
        id: id,
        text: `Todo from server ${id}`
      });
      console.log('Fetching todos from server');
      GlobalEventBus.notifyObservers(TODOS_AVAILABLE, this.items);
    }, 4000);
  }

  addTodo(todoText: string) {
    GlobalEventBus.notifyObservers(ADD_NEW_TODO, todoText);
  }

}
