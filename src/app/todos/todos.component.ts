import { GlobalEventBus } from './../my-observer/event-bus';
import { Component, OnInit } from '@angular/core';
import { MyObserver } from 'app/my-observer/event-bus';
import { Item } from 'app/shared/item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, MyObserver {

  private items: Item[] = [];
  
  constructor() { 
    GlobalEventBus.registerObserver(this);
  }

  ngOnInit() {
    // dlaczego nie rejestrujemy się tutaj?
  }

  notify(data: Item[]) {
    this.items = data;
  }

}
