import { todosStore } from './../my-observable/app-data';
import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { itemsFeed } from 'app/shared/items-feed';
import { setInterval } from 'timers';

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
    todosStore.init(itemsFeed.slice());

    // simulate server call
    setInterval(() => {
      let id = Math.random();
      const newTodo = {
        id: id,
        text: `Todo from server ${id}`
      };

      todosStore.addTodo(newTodo);

    }, 4000);
  }

  addTodo(todoText: string) {
    todosStore.addTodo({
      id: Math.random(),
      text: todoText
    });
  }

}
