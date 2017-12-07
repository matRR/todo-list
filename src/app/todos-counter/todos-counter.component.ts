import { Item } from './../shared/item';
import { MyObserver, GlobalEventBus, TODOS_AVAILABLE, ADD_NEW_TODO } from './../my-observer/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.css']
})
export class TodosCounterComponent implements OnInit, MyObserver {

  private count: number;

  constructor() {
    GlobalEventBus.registerObserver(TODOS_AVAILABLE, this);
    GlobalEventBus.registerObserver(ADD_NEW_TODO, {
      notify: todoText => this.count += 1
    });
  }

  ngOnInit() {
    // dlaczego nie rejestrujemy się tutaj?
  }

  notify(data: Item[]) {
    this.count = data.length;
  }

}
