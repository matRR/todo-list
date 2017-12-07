import { GlobalEventBus, TODOS_AVAILABLE } from './../my-observer/event-bus';
import { Component, OnInit } from '@angular/core';
import { MyObserver, ADD_NEW_TODO } from 'app/my-observer/event-bus';
import { Item } from 'app/shared/item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, MyObserver {

  private items: Item[] = [];
  
  constructor() { 
    GlobalEventBus.registerObserver(TODOS_AVAILABLE, this);
    GlobalEventBus.registerObserver(ADD_NEW_TODO, {
      notify: todoText => {
        this.items.push({
          id: Math.random(),
          text: todoText
        })
      }
    });
  }

  ngOnInit() {
    // dlaczego nie rejestrujemy się tutaj?
  }

  notify(data: Item[]) {
    this.items = data;
  }
  
  toggleTodo(item: Item) {
    item.completed = !item.completed;
  }

}