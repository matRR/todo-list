import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { itemsFeed } from 'app/shared/items-feed';
import { setInterval } from 'timers';
import { initTodos } from 'app/my-observable/app-data';

@Component({
  selector: 'app-my-observer',
  templateUrl: './my-observer.component.html',
  styleUrls: ['./my-observer.component.css']
})
export class MyObserverComponent implements OnInit {

  // remove state from the component
  // items: Item[] = [];

  constructor() { 
  }

  ngOnInit() {
    initTodos(itemsFeed.slice());

    // simulate server call
    setInterval(() => {
      let id = Math.random();
      const newTodo = {
        id: id,
        text: `Todo from server ${id}`
      };

      // TODO - bring new data from the server

    }, 4000);
  }

  addTodo(todoText: string) {
    // TODO
  }

}
