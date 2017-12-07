import { todosStore, IObserver } from 'app/my-observable/app-data';
import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Item } from 'app/shared/item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, IObserver {

  private items: Item[] = [];

  ngOnInit() {
    todosStore.subscribe(this);
  }

  next(data: Item[]) {
    this.items = data;
  }
  
  toggleTodo(item: Item) {
    todosStore.toggleTodo(item);
  }

  removeTodo(item: Item) {
    todosStore.deleteTodo(item);
  }

}