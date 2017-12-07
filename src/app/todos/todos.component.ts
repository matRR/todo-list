import { todos$, IObserver } from 'app/my-observable/app-data';
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
  
  constructor() { 
  }

  ngOnInit() {
    // timing nie jest już ważny, możemy się podpiąć też tutaj lub gdziekolwiek indziej,
    // np w jakimś event'cie UI'owym
    todos$.subscribe(this);
  }

  next(data: Item[]) {
    this.items = data;
  }
  
  toggleTodo(item: Item) {
    item.completed = !item.completed;
  }

  removeTodo(item: Item) {
    _.remove(this.items, ele => ele.id === item.id);
  }

}