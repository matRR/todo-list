import { Item } from './../shared/item';
import { Component, OnInit } from '@angular/core';
import { IObserver, todosStore } from 'app/my-observable/app-data';

@Component({
  selector: 'app-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.css']
})
export class TodosCounterComponent implements OnInit, IObserver {

  private count: number;

  constructor() {
    todosStore.todos$.subscribe(this)
  }

  ngOnInit() {
  }

  next(data: Item[]) {
    this.count = data.length;
  }

}
