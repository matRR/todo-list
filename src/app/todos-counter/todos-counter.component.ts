import { Item } from './../shared/item';
import { MyObserver, GlobalEventBus } from './../my-observer/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.css']
})
export class TodosCounterComponent implements OnInit, MyObserver {
  
    private count: number;
    
    constructor() { 
      GlobalEventBus.registerObserver(this);
    }
  
    ngOnInit() {
      // dlaczego nie rejestrujemy się tutaj?
    }
  
    notify(data: Item[]) {
      this.count = data.length;
    }
  
  }
  